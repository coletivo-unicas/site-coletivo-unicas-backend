import { CmdGraphql } from './delivery/api/graphql/cmd/server'
import { CmdRest } from './delivery/api/rest/cmd/cmd'

const GRAPHQL = 'site-coletivo-unicas-backend'
const REST = 'site-coletivo-unicas-backend-rest-api'

class Main {
    public initDev(): void {
        new CmdRest().server()
    }

    public init(): void {
        if (this.checkEnvVar()) {
            if (process.env.SERVER == GRAPHQL) {
                new CmdGraphql().server()
            } else if (process.env.SERVER == REST) {
                new CmdRest().server()
            }
        }
    }

    private checkEnvVar(): boolean {
        if (!process.env.SERVER) {
            console.log('env var SERVER not found')
            return false
        }

        return true
    }
}

// new Main().init()
new Main().initDev()
