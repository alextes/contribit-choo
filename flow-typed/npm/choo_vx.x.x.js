// flow-typed signature: f670764f26ea9622359a7e53f9feb6e0
// flow-typed version: <<STUB>>/choo_v^5.6.2/flow_v0.49.1

/**
 * This is an autogenerated libdef stub for:
 *
 *   'choo'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'choo' {
  declare module.exports: () => {
    route: (string, func) => void,
    mount: string => void,
  };
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'choo/example/index' {
  declare module.exports: any;
}

declare module 'choo/example/test' {
  declare module.exports: any;
}

declare module 'choo/html' {
  declare module.exports: (string[], ...string[]) => Object;
}

declare module 'choo/test' {
  declare module.exports: any;
}

// Filename aliases
declare module 'choo/example/index.js' {
  declare module.exports: $Exports<'choo/example/index'>;
}
declare module 'choo/example/test.js' {
  declare module.exports: $Exports<'choo/example/test'>;
}
declare module 'choo/html.js' {
  declare module.exports: $Exports<'choo/html'>;
}
declare module 'choo/index' {
  declare module.exports: $Exports<'choo'>;
}
declare module 'choo/index.js' {
  declare module.exports: $Exports<'choo'>;
}
declare module 'choo/test.js' {
  declare module.exports: $Exports<'choo/test'>;
}