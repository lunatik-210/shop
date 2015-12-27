
export class NotificationsService {
    constructor() {
        this.messages = [];
    }

    notify(text, type) {
        this.messages.push({text, type});
    }
}
