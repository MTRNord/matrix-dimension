import { Injectable } from "@angular/core";
import { Integration } from "./models/integration";
import { RssConfigComponent } from "../configs/rss/rss-config.component";
import { ContainerContent } from "ngx-modialog";
import { IrcConfigComponent } from "../configs/irc/irc-config.component";
import { TravisCiConfigComponent } from "../configs/travisci/travisci-config.component";
import { CustomWidgetConfigComponent } from "../configs/widget/custom_widget/custom_widget-config.component";
import { WebhooksConfigComponent } from "../configs/webooks/webhooks-config.component";

@Injectable()
export class IntegrationService {

    private static supportedTypeMap = {
        "bot": true,
        "complex-bot": {
            "rss": true,
            "travisci": true,
        },
        "bridge": {
            "irc": true,
            "webhooks": true,
        },
        "widget": {
            "customwidget": true
        },
    };

    private static components = {
        "complex-bot": {
            "rss": RssConfigComponent,
            "travisci": TravisCiConfigComponent,
        },
        "bridge": {
            "irc": IrcConfigComponent,
            "webhooks": WebhooksConfigComponent,
        },
        "widget": {
            "customwidget": CustomWidgetConfigComponent,
        },
    };

    static isSupported(integration: Integration): boolean {
        if (IntegrationService.supportedTypeMap[integration.type] === true) return true;
        if (!IntegrationService.supportedTypeMap[integration.type]) return false;
        return IntegrationService.supportedTypeMap[integration.type][integration.integrationType] === true;
    }

    static hasConfig(integration: Integration): boolean {
        return integration.type !== "bot";
    }

    static getConfigComponent(integration: Integration): ContainerContent {
        return IntegrationService.components[integration.type][integration.integrationType];
    }

    constructor() {
    }
}
