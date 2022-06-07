import { CmdGraphql } from './delivery/api/graphql/cmd/server'

class Main {
    public init(): void {
        new CmdGraphql().server()
    }
}

new Main().init()
