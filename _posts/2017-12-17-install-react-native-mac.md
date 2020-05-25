---
layout: post
title: "Install React Native on Mac"
author: tom
categories: [Code]
image: assets/images/1.jpg
tags: [react native, mobile dev, facebook open source]
---

Follow this simple tutorial to install React Native on Mac.

![Install React Native on Mac]({{ site.baseurl }}/assets/images/install-react-native-mac.jpg)

## Install Node

Download the Node installer from <a href="https://nodejs.org/en/" target="_blank">here</a>.

When I published this tutorial 12/17/17. The current Node version was `8.9.3 LTS`.

## This package will install:

* Node.js v8.9.3 to /usr/local/bin/node
* npm v5.5.1 to /usr/local/bin/npm

## Make sure that /usr/local/bin is in your $PATH

    $ echo $PATH

    /usr/local/bin

## Check node version

    $ node -v
    v8.9.3

    $ npm -v
    5.5.1

## Fixing npm permissions

Fixing npm permissions as seen <a href="https://docs.npmjs.com/getting-started/fixing-npm-permissions" target="_blank">here</a>.

    $ npm config get prefix
    /usr/local

    $ sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink=https://www.instagram.com/p/Bcz_HZRFs_F/ data-instgrm-version="8" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/Bcz_HZRFs_F/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">😍Testing and writing my experience with React Native #coding #reactjs #reactnative #softwaredeveloper #sundayvibes</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="&lt;Macro &#39;profile_link&#39;&gt;" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> Tom Ordonez</a> (@tomordonez) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2017-12-17T17:48:04+00:00">Dec 17, 2017 at 9:48am PST</time></p></div></blockquote> <script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

## Install `create-react-native-app`

Go to the official react native docs <a href="https://facebook.github.io/react-native/docs/getting-started.html" target="_blank">here</a>.

"Create React Native App does not currently work with npm v5. We strongly recommend using npm v3, v4, or a recent version of Yarn".

## Install Yarn:

Follow the official Yarn doc <a href="https://yarnpkg.com/lang/en/docs/install/" target="_blank">here</a>

    $ brew install yarn --without-node

    ==> Downloading https://yarnpkg.com/downloads/1.3.2/yarn-v1.3.2.tar.gz
    ==> Downloading from https://github.com/yarnpkg/yarn/releases/download/v1.3.2/yarn-v1.3.2.tar.gz
    /usr/local/Cellar/yarn/1.3.2: 14 files, 3.9MB, built in 8 seconds

## Install `create-react-native-app` using Yarn

    $ yarn global add create-react-native-app

    yarn global v1.3.2
    [1/4] 🔍  Resolving packages...
    [2/4] 🚚  Fetching packages...
    [3/4] 🔗  Linking dependencies...
    [4/4] 📃  Building fresh packages...
    success Installed "create-react-native-app@1.0.0" with binaries:
      - create-react-native-app

## Create a react native app

    $ create-react-native-app AwesomeProject

    Creating a new React Native app in /Users/../AwesomeProject.

## Output


*Using package manager as yarnpkg with yarn interface.*

*Installing packages. This might take a couple minutes.*

*Installing react-native-scripts...*


*yarn add v1.3.2*

*info No lockfile found.*

*[1/4] 🔍  Resolving packages...*

*warning react-native-scripts > xdl > auth0-js > xtend > object-keys@0.4.0:*

*[2/4] 🚚  Fetching packages...*

*[3/4] 🔗  Linking dependencies...*

*warning "react-native-scripts > xdl > react-redux@5.0.6" has unmet peer dependency "react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0".*

*[4/4] 📃  Building fresh packages...*

*success Saved lockfile.*

*success Saved 379 new dependencies.*

*├─ @expo/bunyan@1.8.10*

*├─ @expo/json-file@5.3.0*

*├─ @expo/osascript@1.8.1*

*├─ @expo/schemer@1.1.0*

*├─ @expo/spawn-async@1.3.0*

*├─ @segment/loosely-validate-event@1.1.2*

*├─ accepts@1.3.4*

*├─ agent-base@2.1.1*

*├─ ajv@5.5.1*

*├─ analytics-node@2.4.1*

*├─ ansi-escapes@3.0.0*

*├─ ansi-regex@3.0.0*

*├─ ansi-styles@3.2.0*

*├─ any-promise@1.3.0*

*├─ array-flatten@1.1.1*

*├─ array-union@1.0.2*

*├─ array-uniq@1.0.3*

*├─ asap@2.0.6*

*├─ asn1@0.2.3*

*├─ assert-plus@1.0.0*

*├─ ast-types@0.10.1*

*├─ async@1.5.2*

*├─ asynckit@0.4.0*

*├─ auth0-js@7.6.1*

*├─ auth0@2.9.1*

*├─ aws-sign2@0.7.0*

*├─ aws4@1.6.0*

*├─ axios@0.16.2*

*├─ babel-plugin-syntax-flow@6.18.0*

*├─ babel-plugin-transform-flow-strip-types@6.22.0*

*├─ babel-polyfill@6.26.0*

*├─ babel-preset-flow@6.23.0*

*├─ babel-runtime@6.26.0*

*├─ balanced-match@1.0.0*

*├─ base64-js@1.2.0*

*├─ Base64@0.1.4*

*├─ base64url@2.0.0*

*├─ bcrypt-pbkdf@1.0.1*

*├─ bluebird@2.11.0*

*├─ body-parser@1.18.2*

*├─ boom@4.3.1*

*├─ brace-expansion@1.1.8*

*├─ buffer-equal-constant-time@1.0.1*

*├─ bytes@3.0.0*

*├─ callsite@1.0.0*

*├─ camel-case@1.2.2*

*├─ capture-stack-trace@1.0.0*

*├─ caseless@0.12.0*

*├─ chalk@2.3.0*

*├─ change-case@2.3.1*

*├─ chardet@0.4.2*

*├─ chownr@1.0.1*

*├─ cli-cursor@2.1.0*

*├─ cli-width@2.2.0*

*├─ clone@2.1.1*

*├─ co@4.6.0*

*├─ color-convert@1.9.1*

*├─ color-name@1.1.3*

*├─ combined-stream@1.0.5*

*├─ commander@2.12.2*

*├─ component-emitter@1.2.1*

*├─ component-type@1.2.1*

*├─ concat-map@0.0.1*

*├─ concat-stream@1.6.0*

*├─ constant-case@1.1.2*

*├─ content-disposition@0.5.2*

*├─ content-type@1.0.4*

*├─ cookie-signature@1.0.6*

*├─ cookie@0.3.1*

*├─ cookiejar@2.1.1*

*├─ core-js@2.5.3*

*├─ core-util-is@1.0.2*

*├─ create-error-class@3.0.2*

*├─ cross-spawn@5.1.0*

*├─ cryptiles@3.1.2*

*├─ crypto-token@1.0.1*

*├─ dashdash@1.14.1*

*├─ data-uri-to-buffer@1.2.0*

*├─ debug@2.6.9*

*├─ decache@4.3.0*

*├─ deep-diff@0.3.4*

*├─ deep-is@0.1.3*

*├─ deepmerge@1.5.2*

*├─ define-properties@1.1.2*

*├─ degenerator@1.0.4*

*├─ delay-async@1.1.0*

*├─ delayed-stream@1.0.0*

*├─ depd@1.1.1*

*├─ destroy@1.0.4*

*├─ dot-case@1.1.2*

*├─ duplexer3@0.1.4*

*├─ ecc-jsbn@0.1.1*

*├─ ecdsa-sig-formatter@1.0.9*

*├─ ee-first@1.1.1*

*├─ encodeurl@1.0.1*

*├─ encoding@0.1.12*

*├─ es-abstract@1.10.0*

*├─ es-to-primitive@1.1.1*

*├─ es6-error@4.0.2*

*├─ es6-promise@4.1.1*

*├─ es6-promisify@5.0.0*

*├─ escape-html@1.0.3*

*├─ escape-string-regexp@1.0.5*

*├─ escodegen@1.9.0*

*├─ esprima@3.1.3*

*├─ estraverse@4.2.0*

*├─ esutils@2.0.2*

*├─ etag@1.8.1*

*├─ exec-async@2.2.0*

*├─ exists-async@2.0.0*

*├─ express@4.16.2*

*├─ extend@3.0.1*

*├─ external-editor@2.1.0*

*├─ extsprintf@1.3.0*

*├─ fast-deep-equal@1.0.0*

*├─ fast-json-stable-stringify@2.0.0*

*├─ fast-levenshtein@2.0.6*

*├─ fbjs@0.8.16*

*├─ figures@2.0.0*

*├─ file-type@4.4.0*

*├─ file-uri-to-path@1.0.0*

*├─ finalhandler@1.1.0*

*├─ follow-redirects@1.2.6*

*├─ foreach@2.0.5*

*├─ forever-agent@0.6.1*

*├─ form-data@2.3.1*

*├─ formidable@1.1.1*

*├─ forwarded@0.1.2*

*├─ freeport-async@1.1.1*

*├─ fresh@0.5.2*

*├─ fs-extra@3.0.1*

*├─ fs-minipass@1.2.3*

*├─ fs.realpath@1.0.0*

*├─ ftp@0.3.10*

*├─ function-bind@1.1.1*

*├─ get-stream@3.0.0*

*├─ get-uri@2.0.1*

*├─ getenv@0.7.0*

*├─ getpass@0.1.7*

*├─ glob@7.1.2*

*├─ globby@6.1.0*

*├─ got@6.7.1*

*├─ graceful-fs@4.1.11*

*├─ har-schema@2.0.0*

*├─ har-validator@5.0.3*

*├─ has-flag@2.0.0*

*├─ has@1.0.1*

*├─ hasbin@1.2.3*

*├─ hawk@6.0.2*

*├─ hoek@4.2.0*

*├─ hoist-non-react-statics@2.3.1*

*├─ home-dir@1.0.0*

*├─ http-errors@1.6.2*

*├─ http-proxy-agent@1.0.0*

*├─ http-signature@1.2.0*

*├─ https-proxy-agent@1.0.0*

*├─ iconv-lite@0.4.19*

*├─ idx@2.2.0*

*├─ indent-string@3.2.0*

*├─ inflight@1.0.6*

*├─ inherits@2.0.3*

*├─ inquirer@3.3.0*

*├─ instapromise@2.0.7-rc.1*

*├─ invariant@2.2.2*

*├─ ip@1.1.5*

*├─ ipaddr.js@1.5.2*

*├─ is-buffer@1.1.6*

*├─ is-callable@1.1.3*

*├─ is-date-object@1.0.1*

*├─ is-fullwidth-code-point@2.0.0*

*├─ is-lower-case@1.1.3*

*├─ is-promise@2.1.0*

*├─ is-redirect@1.0.0*

*├─ is-regex@1.0.4*

*├─ is-retry-allowed@1.1.0*

*├─ is-stream@1.1.0*

*├─ is-symbol@1.0.1*

*├─ is-typedarray@1.0.0*

*├─ is-upper-case@1.1.2*

*├─ isarray@1.0.0*

*├─ isemail@2.2.1*

*├─ isexe@2.0.0*

*├─ isomorphic-fetch@2.2.1*

*├─ isstream@0.1.2*

*├─ items@2.1.1*

*├─ joi@10.6.0*

*├─ join-component@1.1.0*

*├─ js-tokens@3.0.2*

*├─ jsbn@0.1.1*

*├─ json-fallback@0.0.1*

*├─ json-schema-traverse@0.3.1*

*├─ json-schema@0.2.3*

*├─ json-stringify-safe@5.0.1*

*├─ json5@0.5.1*

*├─ jsonfile@2.4.0*

*├─ jsonp@0.0.4*

*├─ jsonschema@1.2.2*

*├─ jsonwebtoken@7.4.3*

*├─ jsprim@1.4.1*

*├─ jwa@1.1.5*

*├─ jws@3.1.4*

*├─ levn@0.3.0*

*├─ lock@0.1.4*

*├─ lodash-es@4.17.4*

*├─ lodash.once@4.1.1*

*├─ lodash@4.17.4*

*├─ loose-envify@1.3.1*

*├─ lower-case-first@1.0.2*

*├─ lower-case@1.1.4*

*├─ lowercase-keys@1.0.0*

*├─ lru-cache@4.1.1*

*├─ lru-memoizer@1.11.1*

*├─ lsmod@1.0.0*

*├─ match-require@2.1.0*

*├─ md5hex@1.0.0*

*├─ media-typer@0.3.0*

*├─ merge-descriptors@1.0.1*

*├─ methods@1.1.2*

*├─ mime-db@1.30.0*

*├─ mime-types@2.1.17*

*├─ mime@1.4.1*

*├─ mimic-fn@1.1.0*

*├─ minimatch@3.0.4*

*├─ minimist@1.2.0*

*├─ minipass@2.2.1*

*├─ minizlib@1.0.4*

*├─ mkdirp-promise@5.0.1*

*├─ mkdirp@0.5.1*

*├─ moment@2.19.4*

*├─ ms@2.0.0*

*├─ mute-stream@0.0.7*

*├─ mv@2.1.1*

*├─ mz@2.7.0*

*├─ ncp@2.0.0*

*├─ negotiator@0.6.1*

*├─ netmask@1.0.6*

*├─ next-tick@1.0.0*

*├─ node-fetch@1.7.3*

*├─ oauth-sign@0.8.2*

*├─ object-assign@4.1.1*

*├─ object-keys@1.0.11*

*├─ object.assign@4.0.4*

*├─ object.getownpropertydescriptors@2.0.3*

*├─ on-finished@2.3.0*

*├─ once@1.4.0*

*├─ onetime@2.0.1*

*├─ opn@4.0.2*

*├─ optionator@0.8.2*

*├─ os-tmpdir@1.0.2*

*├─ pac-proxy-agent@2.0.0*

*├─ pac-resolver@3.0.0*

*├─ param-case@1.1.2*

*├─ parseurl@1.3.2*

*├─ pascal-case@1.1.2*

*├─ path-case@1.1.2*

*├─ path-exists@3.0.0*

*├─ path-is-absolute@1.0.1*

*├─ path-to-regexp@0.1.7*

*├─ performance-now@2.1.0*

*├─ pify@2.3.0*

*├─ pinkie-promise@2.0.1*

*├─ pinkie@2.0.4*

*├─ plist@2.1.0*

*├─ prelude-ls@1.1.2*

*├─ prepend-http@1.0.4*

*├─ probe-image-size@3.2.0*

*├─ process-nextick-args@1.0.7*

*├─ progress@2.0.0*

*├─ promise@7.3.1*

*├─ prop-types@15.6.0*

*├─ proxy-addr@2.0.2*

*├─ proxy-agent@2.1.0*

*├─ pseudomap@1.0.2*

*├─ punycode@1.3.2*

*├─ qrcode-terminal@0.11.0*

*├─ qs@6.5.1*

*├─ querystring@0.2.0*

*├─ range-parser@1.2.0*

*├─ raven-js@3.21.0*

*├─ raven@2.3.0*

*├─ raw-body@2.3.2*

*├─ react-native-scripts@1.8.1*

*├─ react-redux@5.0.6*

*├─ read-chunk@2.1.0*

*├─ readable-stream@2.3.3*

*├─ redux-logger@2.10.2*

*├─ redux@3.7.2*

*├─ regenerator-runtime@0.11.1*

*├─ remove-trailing-slash@0.1.0*

*├─ replace-string@1.1.0*

*├─ request-progress@3.0.0*

*├─ request@2.83.0*

*├─ reqwest@2.0.5*

*├─ rest-facade@1.10.1*

*├─ restore-cursor@2.0.0*

*├─ retry@0.10.1*

*├─ rimraf@2.6.2*

*├─ run-async@2.3.0*

*├─ rx-lite-aggregates@4.0.8*

*├─ rx-lite@4.0.8*

*├─ safe-buffer@5.1.1*

*├─ safe-json-stringify@1.0.4*

*├─ semver@5.0.3*

*├─ send@0.16.1*

*├─ sentence-case@1.1.3*

*├─ serve-static@1.13.1*

*├─ setimmediate@1.0.5*

*├─ setprototypeof@1.1.0*

*├─ shebang-command@1.2.0*

*├─ shebang-regex@1.0.0*

*├─ signal-exit@3.0.2*

*├─ slugid@1.1.0*

*├─ slugify@1.2.6*

*├─ smart-buffer@1.1.15*

*├─ snake-case@1.1.2*

*├─ sntp@2.1.0*

*├─ socks-proxy-agent@2.1.1*

*├─ socks@1.1.10*

*├─ source-map-support@0.4.18*

*├─ source-map@0.5.7*

*├─ sshpk@1.13.1*

*├─ stack-trace@0.0.9*

*├─ statuses@1.3.1*

*├─ stream-parser@0.3.1*

*├─ string_decoder@1.0.3*

*├─ string-width@2.1.1*

*├─ stringstream@0.0.5*

*├─ strip-ansi@4.0.0*

*├─ superagent-proxy@1.0.2*

*├─ superagent-retry@0.6.0*

*├─ superagent@3.8.2*

*├─ supports-color@4.5.0*

*├─ swap-case@1.1.2*

*├─ symbol-observable@1.1.0*

*├─ tar@4.1.1*

*├─ thenify-all@1.6.0*

*├─ thenify@3.3.0*

*├─ throttleit@1.0.0*

*├─ through@2.3.8*

*├─ thunkify@2.1.2*

*├─ timed-out@4.0.1*

*├─ title-case@1.1.2*

*├─ tmp@0.0.33*

*├─ topo@2.0.2*

*├─ tough-cookie@2.3.3*

*├─ tree-kill@1.2.0*

*├─ trim@0.0.1*

*├─ tunnel-agent@0.6.0*

*├─ tweetnacl@0.14.5*

*├─ type-check@0.3.2*

*├─ type-is@1.6.15*

*├─ typedarray@0.0.6*

*├─ ua-parser-js@0.7.17*

*├─ universalify@0.1.1*

*├─ unpipe@1.0.0*

*├─ unzip-response@2.0.1*

*├─ upper-case-first@1.1.2*

*├─ upper-case@1.1.3*

*├─ url-parse-lax@1.0.0*

*├─ url@0.11.0*

*├─ util-deprecate@1.0.2*

*├─ util.promisify@1.0.0*

*├─ utils-merge@1.0.1*

*├─ uuid@3.1.0*

*├─ vary@1.1.2*

*├─ verror@1.10.0*

*├─ very-fast-args@1.1.0*

*├─ whatwg-fetch@2.0.3*

*├─ which@1.3.0*

*├─ winchan@0.1.4*

*├─ wordwrap@1.0.0*

*├─ wrappy@1.0.2*

*├─ xdl@47.0.4*

*├─ xmlbuilder@8.2.2*

*├─ xmldom@0.1.27*

*├─ xregexp@2.0.0*

*├─ xtend@4.0.1*

*├─ yallist@2.1.2*

*└─ yesno@0.0.1*

*✨  Done in 30.28s.*

*Installing dependencies using yarn...*


*yarn install v1.3.2*

*[1/4] 🔍  Resolving packages...*

*warning react-native > connect@2.30.2: connect 2.x series is deprecated*

*[2/4] 🚚  Fetching packages...*

*[3/4] 🔗  Linking dependencies...*

*warning "jest-expo > babel-jest@21.2.0" has unmet peer dependency "babel-core@^6.0.0 || ^7.0.0-alpha || ^7.0.0-beta || ^7.0.0".*

*[4/4] 📃  Building fresh packages...*

*success Saved lockfile.*

*✨  Done in 73.83s.*



*Success! Created AwesomeProject at /Users/.../AwesomeProject*

*Inside that directory, you can run several commands:*


*yarn start*

*Starts the development server so you can open your app in the Expo*

*app on your phone.*


*yarn run ios*

*(Mac only, requires Xcode)*

*Starts the development server and loads your app in an iOS simulator.*


*yarn run android*

*(Requires Android build tools)*

*Starts the development server and loads your app on a connected Android*

*device or emulator.*


*yarn test*

*Starts the test runner.*


*yarn run eject*

*Removes this tool and copies build dependencies, configuration files*

*and scripts into the app directory. If you do this, you can’t go back!*


*We suggest that you begin by typing:*


*cd AwesomeProject*

*yarn start*


*Happy hacking!*

## Start the app

    $ cd AwesomeProject

    $ yarn start
    yarn run v1.3.2

## Output Error Unable to start server

    $ react-native-scripts start

    23:15:49: Unable to start server
    See https://git.io/v5vcn for more information, either install watchman or run the following snippet:
    sudo sysctl -w kern.maxfiles=5242880
    sudo sysctl -w kern.maxfilesperproc=524288

    error Command failed with exit code 1.
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

<a href="https://github.com/react-community/create-react-native-app/issues/382" target="_blank">This</a> page had 2 solutions:

1. Run the `sudo sysctl` commands or
2. Install Watchman.

Here is more info about `Watchman`:

`Watchman` is a file watching service open sourced by Facebook.

"<a href="https://facebook.github.io/watchman/" target="_blank">Watchman</a> exists to watch files and record when they change. It can also trigger actions (such as rebuilding assets) when matching files change."

The solution with the most thumbs up is this one:

    $ sudo sysctl -w kern.maxfiles=5242880
    kern.maxfiles: 12288 -> 5242880

    $ sudo sysctl -w kern.maxfilesperproc=524288
    kern.maxfilesperproc: 10240 -> 524288

Here is more info about this command:

`sysctl` is used to get or set kernel state.

<a href="https://www.freebsd.org/doc/handbook/configtuning-kernel-limits.html" target="_blank">Here</a> is more info about "tuning kernel limits":

It says that "The kern.maxfiles sysctl(8) variable can be raised or lowered based upon system requirements. This variable indicates the maximum number of file descriptors on the system"

<a href="http://krypted.com/mac-os-x/maximum-files-in-mac-os-x/" target="_blank">Here</a> is some more info about this:

"By default, the maximum number of files that Mac OS X can open is set to 12,288 and the maximum number of files a given process can open is 10,240."

It also says that if you reboot, that it will go back to the original values. Although there is a workaround as seen on that post.

## Start development server

    $ yarn start

It will show this output:

    yarn run v1.3.2
    $ react-native-scripts start
    12:11:00: Starting packager...
    Packager started!

    To view your app with live reloading, point the Expo app to this QR code.
    You'll find the QR scanner on the Projects tab of the app.

    GIANT QR CODE HERE
    ...

    Or enter this address in the Expo app's search bar:

    exp://10.0.0.10:19000

    Your phone will need to be on the same local network as this computer.
    For links to install the Expo app, please visit https://expo.io.

    Logs from serving your app will appear here. Press Ctrl+C at any time to stop.

    › Press a to open Android device or emulator, or i to open iOS emulator.
    › Press q to display QR code.
    › Press r to restart packager, or R to restart packager and clear cache.
    › Press d to toggle development mode. (current mode: development)

## Install the Expo client app

As seen in the Expo doc <a href="https://expo.io/learn" target="_blank">here</a>:

Download the app on your phone. Then scan the QR code on your terminal.

Back in the Terminal now says:

    12:17:51: Finished building JavaScript bundle in 69956ms
    12:17:58: Running app on Tom O in development mode

To stop use `Ctrl+C`.

    12:36:05: Stopping packager...
    12:36:06: Packager stopped.

## Next steps

I will follow with another tutorial to build an app. But for now you have a setup, which is often where most people drop out.

## Got a React Native question? Please comment belowost people drop out.

## Got a React Native question? Please comment below