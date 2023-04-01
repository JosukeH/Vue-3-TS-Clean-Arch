export class Ploc {
    constructor(initialState) {
        this.listeners = [];
        this.internalState = initialState;
    }
    get state() {
        return this.internalState;
    }
    changeState(state) {
        this.internalState = state;
        if (this.listeners.length > 0) {
            this.listeners.forEach(listener => listener(this.state));
        }
    }
    subscribe(listener) {
        this.listeners.push(listener);
    }
    unsubscribe(listener) {
        const index = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }
}
//# sourceMappingURL=Ploc.js.map