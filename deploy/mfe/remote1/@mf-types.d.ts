
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/WithProvider';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/WithProvider' ? typeof import('REMOTE_ALIAS_IDENTIFIER/WithProvider') :any;