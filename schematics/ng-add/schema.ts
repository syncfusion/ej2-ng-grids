export interface OptionsSchema {
    // Whether to skip package.json install.
    skipPackageJson: boolean;

    // Used to specify required module names
    modules: string;

    // Name of the project to target.
    project?: string;
}

export interface LibOptionsSchema {
    // Package name
    pkgName: string;

    // Package version
    pkgVer: string;

    // Library base module name
    moduleName: string;
}
