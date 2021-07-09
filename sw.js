/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/03/23/archlinuxdesktop/index.html","700b738cc25674eba17d5d40e9d69da7"],["/2020/03/23/archlinuxsystem/index.html","487082891555e0ef175502a60f46e696"],["/2020/03/23/aria2/index.html","07ae6cd0760d6d474b49eb70df4d2bbc"],["/2020/03/23/binary/index.html","2bfd8cda2a072876d7da74b5365b4152"],["/2020/03/23/configvim/index.html","80ae56ef0b66788f644d7807eeee6eaa"],["/2020/03/23/gitssh/index.html","28682513a04eaf5492ab871ab306c743"],["/2020/03/23/h5ai/index.html","da482d0bfcf079f16ada1d1ea5742e22"],["/2020/03/23/hexobase/index.html","14045fbb35324d64c90f3b6260383a1a"],["/2020/03/23/learnvim/index.html","cdf61916898ecaef3f6e52d9fb1fce9a"],["/2020/03/23/manjaro-i3/index.html","2a4db0fc67e6e5a60f09438a40063ed6"],["/2020/03/23/markdown/index.html","e773038d64cc9abb1e1d1134d1d11195"],["/2020/03/23/picee/index.html","64ded264ffe78735a454a00d0b6aa9e6"],["/2020/03/23/picgo/index.html","d4f87437cec06ff2835b853ec857de22"],["/2020/03/23/prettykde/index.html","bc6d426db5e9bcffd99d72e0caa27e4c"],["/2020/03/23/usegit/index.html","f18f93fbac8b629188a4d81cbd432399"],["/2020/03/23/wordpress/index.html","0fc3d39f8b20a840f8485e4ca2c53d8b"],["/2020/03/25/emailreply/index.html","a612ed720c9be05fc63b3e296bf58f3b"],["/2020/03/26/netlifydeploy/index.html","76dd7f047015ada52b8edfb11f3c7a24"],["/2020/03/28/solvepicnet/index.html","bf17e9e7999005c8c522611b44da1105"],["/2020/03/31/installbrew/index.html","e32a42232893634b705b309c3e0a36e2"],["/2020/04/03/gittwossh/index.html","1335537df783e6fbd9e695c4609be424"],["/2020/04/05/arch-newsil/index.html","d967311036c97f980452b9c774cbaa9c"],["/2020/04/21/mcsever/index.html","22e80ca0fb9442e0d0e22e8fad006a6a"],["/2020/04/23/How-To-Ask/index.html","dd7532cd81e2f582b09ff7b5324fb4f4"],["/2021/07/04/new/index.html","49c0026b7219c74112ebecc1ff2e01da"],["/about/index.html","3363ff7ba5720415b82a1a2bec1f0da2"],["/archives/2020/03/index.html","30a3624ea444bbf98cbdb4eff4eb42cb"],["/archives/2020/03/page/2/index.html","8d3fb46ba25eb737fee01b47427fff7f"],["/archives/2020/04/index.html","f8b2838b98d4cc6c7616edc8c8003dd6"],["/archives/2020/index.html","e0ca40380ebbedabbccdacc27de2e1e4"],["/archives/2020/page/2/index.html","c2a92fea6caece43df7578ea9882eb5c"],["/archives/2020/page/3/index.html","38021d448a526f013e997d6286f94681"],["/archives/2021/07/index.html","a4de70bd749168888f3c838ba5004dbf"],["/archives/2021/index.html","16310b2d790fc34bfcfcf5e91f94e4de"],["/archives/index.html","eecc8cbe7d6760ef5f8191d41cdb68fc"],["/archives/page/2/index.html","eecc8cbe7d6760ef5f8191d41cdb68fc"],["/archives/page/3/index.html","eecc8cbe7d6760ef5f8191d41cdb68fc"],["/categories/arch/index.html","30548b3d5bdc056f1be8cee1f1109365"],["/categories/archlinux/index.html","15138576f37b82f33509d177d49bb917"],["/categories/archlinux/linux/index.html","9f6108010355a98ad7dae6b97394202c"],["/categories/brew/index.html","6887c9555bf0c5248974e185d7cf785f"],["/categories/git/index.html","09621ddd60aacf4b02c3effb80eec4cf"],["/categories/i3wm/index.html","92ed610e0d68d3a9cf75a9314dab6cf0"],["/categories/index.html","3e6ee5998fee86084b12134d39e7a804"],["/categories/linux/index.html","5e3ea22e6a3e07ff1ed9c9c6ad813ef7"],["/categories/netlify/index.html","79d9692133db82d59bc4f16d8ebc9ab8"],["/categories/picee/index.html","b11eb3acece468d78e8720b292bc1a62"],["/categories/picgo/index.html","0a629fa998fe909dec5d8976b50aa383"],["/categories/valine/index.html","74a0865e44acda4e96f0f58badbb3575"],["/categories/vim/index.html","3f8f5eef3823b01e42c1d013795b9ab3"],["/categories/搭建网站/hexo/index.html","4a188af946e548fd22cc23468967c945"],["/categories/搭建网站/index.html","e33ffbee4b853d072162d6f1f28905da"],["/categories/服务器/index.html","ea9413b657b3a9251bfce2e1bf09b089"],["/categories/编程/index.html","5a390fdbb35aad9a1da81ad8b2e38b65"],["/categories/转载/index.html","6e2d755d53f9c65ab62206b173d307b0"],["/css/first.css","6cc7a23f531790422a000e4011795f88"],["/css/style.css","acedc4bf5ed6e6164483a0e7fab9d555"],["/index.html","07933354579a620b81c94ec72e15ea06"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/new/index.html","c7a9a71f240b2b5b6efc10687e974df0"],["/page/2/index.html","51b7ba79cf1f1191aff3971c0442201a"],["/page/3/index.html","8e386cc27fe99caad361a527fa25138d"],["/sw-register.js","5ec71de09d384a7537115004fe12c00a"],["/tags/WordPress/index.html","0691941ceecde89c75333073c567ca6a"],["/tags/arch/index.html","83244c820fe1b455d816400cad2a02ce"],["/tags/archlinux/index.html","d873cb78d30dca80f0920b7517955a26"],["/tags/aria2/index.html","ebf9da926294cf06b3e9bd0cb1cd8007"],["/tags/brew/index.html","b5ebbb10560eadadbad2849e641a91e3"],["/tags/git/index.html","644a5531d921516d1b2b38e5dc783b24"],["/tags/gitssh/index.html","30dc92c9a47aeccc6643e0ad8d2c3b77"],["/tags/h5ai/index.html","8fa64d215be729d4d2d39e8af1fbd775"],["/tags/hexo/index.html","20ec7b20662cc22f733af6f5539d3927"],["/tags/i3wm/index.html","c83eacc617837d03597952e373bc0bb7"],["/tags/index.html","204f63cb27dac9a50984a5fa1296f000"],["/tags/kde/index.html","396252ee897737e6c5d3512bd2de19d3"],["/tags/linux/index.html","7969f7fb9da2c7988692af7e6791bb57"],["/tags/manjaro/index.html","2f6ca765f5912a51f99facbb705ad566"],["/tags/markdown/index.html","4923c39fa5d1887e972c5a6c42d65d2a"],["/tags/netlify/index.html","379d063295f57e2ddc27494510a11786"],["/tags/picee/index.html","5d02609d9b94eb9488c4977abda11804"],["/tags/picgo/index.html","c3ad46bf7fcdb10e61c00e16c4bc8b88"],["/tags/valine/index.html","447bc37883d56124656e9223c2ec0dab"],["/tags/vim/index.html","d35a77ee54e95e939732b1f9ea962fe5"],["/tags/web/index.html","09386a12280b4a39fc2ba4d14f54d693"],["/tags/博客/index.html","f96b728a33e74fe662348a0e985c8f57"],["/tags/图床/index.html","ba7c1e2f75c9053ba6e39ebe9ba513d5"],["/tags/我的世界/index.html","4ce37ed51923165272cf259cd7ad9006"],["/tags/提问的智慧/index.html","63c75ebbb906558d0ded10a4c6acadbe"],["/tags/进制/index.html","852d5ccada39e4dea0989527e7ebdc0a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
