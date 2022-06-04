import { CmdGraphql } from './delivery/api/graphql/cmd/server'

const GRAPHQL = 'coletivo-unicas-site-api'

class Main {
    public initDev(): void {
        new CmdGraphql().server()
    }

    public init(): void {
        if (this.checkEnvVar()) {
            if (process.env.SERVER == GRAPHQL) {
                new CmdGraphql().server()
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
