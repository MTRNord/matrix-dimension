export interface Integration {
    type: string;
    integrationType: string;
    userId: string;
    name: string;
    avatar: string;
    about: string; // nullable
    isEnabled: boolean;
    isBroken: boolean;
    hasConfig: boolean;
    requirements?: any; // nullable
    bridgeError: string; // nullable
}

export interface RSSIntegration extends Integration {
    feeds: string[];
    immutableFeeds: {url: string, ownerId: string}[];
}

export interface TravisCiIntegration extends Integration {
    repoTemplates: {repoKey: string, template: string, newTemplate: string}[]; // newTemplate is local
    immutableRepoTemplates: {repoKey: string, template: string, ownerId: string}[];
    webhookUrl: string; // immutable
}

export interface IRCIntegration extends Integration {
    availableNetworks: {name: string, id: string}[];
    channels: {[networkId: string]: string[]};
}

export interface WebhooksIntegration extends Integration {
    hooks: {id: string, url: string, userId: string, roomId: string, type: "incoming"}[];
}