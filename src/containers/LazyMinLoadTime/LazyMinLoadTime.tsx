import { ComponentType, lazy } from 'react'

const lazyMinLoadTime = <T extends ComponentType<any>>(
    factory: () => Promise<{ default: T }>,
    minLoadTimeMs = 600,
) => lazy(() => Promise.all([
        factory(),
        new Promise((resolve) => setTimeout(resolve, minLoadTimeMs)),
    ]).then(([moduleExports]) => moduleExports))

export default lazyMinLoadTime
