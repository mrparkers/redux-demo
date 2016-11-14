/* 
    Using webpack's sass loader will cause mocha tests to fail, as it is trying to interpret the sass as js.
    This compiler will tell mocha to ignore any require() statements that end in '.scss'.
*/

function noop() {
    return null;
}

require.extensions['.scss'] = noop;