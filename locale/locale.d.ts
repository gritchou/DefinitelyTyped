// Type definitions for locale
// Project: https://github.com/pillarjs/locale
// Definitions by: Jean-François Grand <https://github.com/gritchou/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "locale" {
    import { RequestHandler } from "express";

    namespace locale {
        export class Locale {
            static default: string;
            constructor(languageTag: string);
        }
        export class Locales extends Array<string> {
            constructor(acceptLanguageHeader: string | string[], defaultValue?: string);
            best(supportedLocales?: Locales): Locale;
        }
    }
    
    function locale(supportedLocales: string[]): RequestHandler;
    export = locale;
}