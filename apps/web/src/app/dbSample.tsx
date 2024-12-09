
import { UserValue } from './dbUtils'
import { Suspense } from 'react'
import { DbForm } from './dbForm'


const DbSample = async () => {

    return (
        <div>
            <DbForm />
            <Suspense fallback={<span>loading...</span>}>
                <UserValue />
            </Suspense>
        </div>
    )
}

export default DbSample