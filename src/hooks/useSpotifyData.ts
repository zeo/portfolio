import { onMounted, onUnmounted, Ref, ref } from 'vue';

type HelloMessage = {
    op: 1;
    d: {
        heartbeat_interval: number;
    };
}

type EventMessageBase<E, T> = {
    op: 0;
    t: E;
    d: T;
};

type EventMessage = InitializeEvent |  PresenceUpdateEvent;

type SocketMessage = HelloMessage | EventMessage;

type InitializeEvent = EventMessageBase<'INIT_STATE', Record<string, LanyardPresenceData>>;
type PresenceUpdateEvent = EventMessageBase<'PRESENCE_UPDATE', LanyardPresenceData>

type LanyardPresenceData = {
    spotify: SpotifyData;
    listening_to_spotify: boolean;
};

type SpotifyData = {
    track_id: string;
    song: string;
    album_art_url: string;
    artist: string;
}

class LanyardConnection {
    private readonly socket: WebSocket;
    private heartbeatId?: number;
    private readonly callback: (data: LanyardPresenceData) => void;

    constructor(callback: (data: LanyardPresenceData) => void) {
        this.callback = callback;

        this.socket = new WebSocket('wss://api.lanyard.rest/socket');
        this.socket.onmessage = this.onSocketMessage.bind(this);
    }

    private onSocketMessage(msg: MessageEvent) {
        const data: SocketMessage = JSON.parse(msg.data);

        switch (data.op) {
        case 0:
            this.handleEvent(data);
            break;
        case 1:
            this.handleHello(data);
            break;
        }
    }

    private handleHello(data: HelloMessage) {
        this.sendInitialize();

        this.heartbeatId = window.setInterval(() => {
            this.sendHeartbeat();
        }, data.d.heartbeat_interval);
    }

    private sendHeartbeat() {
        const data = JSON.stringify({
            op: 3,
        });

        this.socket.send(data);
    }

    private sendInitialize() {
        const data = JSON.stringify({
            op: 2,
            d: {
                subscribe_to_ids: [import.meta.env.VITE_DISCORD_USER_ID],
            },
        });

        this.socket.send(data);
    }

    private handleEvent(data: EventMessage) {
        let userData: LanyardPresenceData | undefined = undefined;

        if (data.t === 'INIT_STATE') {
            userData = data.d[import.meta.env.VITE_DISCORD_USER_ID];
        } else if (data.t === 'PRESENCE_UPDATE') {
            userData = data.d;
        }

        if (!userData) return;

        this.callback(userData);
    }

    public close() {
        this.socket.close();
        window.clearInterval(this.heartbeatId);
    }
}

export default function useSpotifyData(): Ref<SpotifyData | false | null> {
    const data = ref<SpotifyData | false | null>(null);
    let socket: LanyardConnection;

    onMounted(() => {
        socket = new LanyardConnection(d => {
            data.value = d.listening_to_spotify ? d.spotify : false;
        });
    });

    onUnmounted(() => {
        socket?.close();
    })

    return data;
}