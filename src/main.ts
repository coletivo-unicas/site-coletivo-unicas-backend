import { CmdRest } from './delivery/api/rest/cmd/cmd'

class Main {
    public init(): void {
        new CmdRest().server()
    }
}

new Main().init()
