
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/context';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/context' ? typeof import('REMOTE_ALIAS_IDENTIFIER/context') :any;