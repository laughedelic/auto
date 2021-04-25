import { Auto, IPlugin } from "@auto-it/core";
import * as t from "io-ts";
declare const pluginOptions: t.PartialC<{
    manageVersion: t.BooleanC;
}>;
export declare type ISbtPluginOptions = t.TypeOf<typeof pluginOptions>;
/** Publish Scala projects with sbt */
export default class SbtPlugin implements IPlugin {
    /** The name of the plugin */
    name: string;
    /** The options of the plugin */
    readonly options: ISbtPluginOptions;
    /** Initialize the plugin with it's options */
    constructor(options: ISbtPluginOptions);
    /** Tap into auto plugin points. */
    apply(auto: Auto): void;
}
export {};
//# sourceMappingURL=index.d.ts.map