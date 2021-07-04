/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/03/23/archlinuxdesktop/index.html","2fd60ede3f4087b15c4d6eaa93b260ca"],["/2020/03/23/archlinuxsystem/index.html","33c14f0d2da781e1df14ee0d93001829"],["/2020/03/23/aria2/index.html","f618262fc02273a9297c1e48ea3b6b7a"],["/2020/03/23/binary/index.html","b05468acaa8910f31ede18462ec313c2"],["/2020/03/23/configvim/index.html","061b1886663a08267a16d3c0f432b042"],["/2020/03/23/gitssh/index.html","86b6dd9c94e17e290ac75fd6cdc8db37"],["/2020/03/23/h5ai/index.html","095998652375a741437df7769132055c"],["/2020/03/23/hexobase/index.html","5f5d42e136e569991cc4e1ae3e988328"],["/2020/03/23/learnvim/index.html","040397c1f05962d2a7c3c91f09b05db2"],["/2020/03/23/manjaro-i3/index.html","1a23330b15af9e364fc045b4b570c260"],["/2020/03/23/markdown/index.html","b812dcba9c3428f58de15351b0b38c9c"],["/2020/03/23/picee/index.html","30db5fe5f7c6fef9b076f736cb7c4b06"],["/2020/03/23/picgo/index.html","de21af016d53e03eed81df754737d350"],["/2020/03/23/prettykde/index.html","e996f168d717ac26533ab0043dfe4b1b"],["/2020/03/23/usegit/index.html","ca2763321278f6bc60fecc90fa60847b"],["/2020/03/23/wordpress/index.html","97bc36132c75e9c0e8e4f823b5529030"],["/2020/03/25/emailreply/index.html","3fc598a24fff8de77acc71e5af0dde93"],["/2020/03/26/netlifydeploy/index.html","0e0d6522843c924bb8814c10bf9fb525"],["/2020/03/28/solvepicnet/index.html","13131083b10d755dcc898700109cdd40"],["/2020/03/31/installbrew/index.html","2975fb85b7486a0af70f9a4dd8b38182"],["/2020/04/03/gittwossh/index.html","bf29397b54bcfe0571d2feda3ad52c2b"],["/2020/04/05/arch-newsil/index.html","02a4a939ef04a4ef8f1689464ceb6256"],["/2020/04/21/mcsever/index.html","c3885b6d08c2312e289f51765e540ee3"],["/2020/04/23/How-To-Ask/index.html","834a7a1bce0e7d2441cba5176295d1df"],["/2021/07/04/new/index.html","2dcf25da70df9b2908c02f699031c0e4"],["/about/index.html","a62f0bb4f9e48140c23ae7515afad802"],["/archives/2020/03/index.html","8f2e44002c2fa7436a7e90892000e36b"],["/archives/2020/03/page/2/index.html","03d1c40b1c0bc929cd1199f61bf61a8c"],["/archives/2020/04/index.html","c9740bbcf1fe84b50219ec602d1f779c"],["/archives/2020/index.html","062bcfbe6557a80daba13adda5b982bd"],["/archives/2020/page/2/index.html","3ba6f40c93f613e55f4ba0f540f7cb68"],["/archives/2020/page/3/index.html","d2410ddc9626267f66b017c5eda8ee69"],["/archives/2021/07/index.html","db980151425fce243331e5a53f7bcd2a"],["/archives/2021/index.html","38484504b21ee04d1e9b4e71258f81da"],["/archives/index.html","b83b9fed1da45f91edb76ec582622ff5"],["/archives/page/2/index.html","b83b9fed1da45f91edb76ec582622ff5"],["/archives/page/3/index.html","b83b9fed1da45f91edb76ec582622ff5"],["/categories/arch/index.html","3c2cd67a9529e3aa92bcadfd79b2b033"],["/categories/archlinux/index.html","b4c04e2f79cef9801530599408305955"],["/categories/archlinux/linux/index.html","c0cc737f191cae128b801d5543ed2d82"],["/categories/brew/index.html","e3bdce9d599b42d3acbd5efdf6eb1013"],["/categories/git/index.html","5acc6abc8e49d5ca6dde833d8138d01d"],["/categories/i3wm/index.html","5d95e563bcc53c387c2641455e1b3029"],["/categories/index.html","e72bd414880db1522817822439591e2d"],["/categories/linux/index.html","d0338af692474b6a65632280a23799e5"],["/categories/netlify/index.html","0dc3ff5e93547ee1b75ab23efafa4a07"],["/categories/picee/index.html","eb80e480f403a949db06ae6fc06368c6"],["/categories/picgo/index.html","d2184ef421ec4ce745607a26d94cf30b"],["/categories/valine/index.html","f9f9aaab4d9b9075cc5471674ee00ebe"],["/categories/vim/index.html","04f1995fe35bbe1b812b2afa447ebc68"],["/categories/搭建网站/hexo/index.html","1c3aabf4b9dd621a556c047379d9b144"],["/categories/搭建网站/index.html","24112d77d4739cac1b65976a7484d524"],["/categories/服务器/index.html","8f7e9e9b86969e988752bc4fa7517daa"],["/categories/编程/index.html","662c5cf9b87bfac3c7e48cb4c4ee81b9"],["/categories/转载/index.html","7e2cb8cded57ee953506202e172b5107"],["/css/first.css","6cc7a23f531790422a000e4011795f88"],["/css/style.css","acedc4bf5ed6e6164483a0e7fab9d555"],["/index.html","07ca835d48400dfce20103c09e85b71b"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/new/index.html","90e294b7b1f9844b8c9b57d69dc45169"],["/page/2/index.html","5e2a6547c4b6070aabc8d67e4bc26196"],["/page/3/index.html","3630141cc0e2ac8125d5a826d7ebcbbe"],["/sw-register.js","d7745ac3f949ace98c0ade2c8dd439be"],["/tags/WordPress/index.html","6bead3481b821c7915a82837e79ee869"],["/tags/arch/index.html","04003377fc123d78cd8d83379ce0718b"],["/tags/archlinux/index.html","5486b4a84ec49468cd77582f175464f2"],["/tags/aria2/index.html","0d51665f1e7877817f67c54f3a9fae60"],["/tags/brew/index.html","68b4dac6028976c935fc179fa77a65a4"],["/tags/git/index.html","8dee2343f1f5b94f767281a1ee50c660"],["/tags/gitssh/index.html","417c26ab5cc127cab4f9543e5e468c1f"],["/tags/h5ai/index.html","16d48ab379d83c7fb6aa4b6efc5bd432"],["/tags/hexo/index.html","5454163a007541083696fdfa4c0aae59"],["/tags/i3wm/index.html","8304feea03224e1d764d2c43d2aef1f6"],["/tags/index.html","fcd956bac3900a9e540c7040edf5d169"],["/tags/kde/index.html","cfa8381ff857b43b7f90c451aba6d700"],["/tags/linux/index.html","48601cd905f8d37c5245bdaedec10c61"],["/tags/manjaro/index.html","e92ca058264681dd92a21bd8fecbe734"],["/tags/markdown/index.html","22c0842a578cee750c330145ef704582"],["/tags/netlify/index.html","170544e7410b1084c446f0a294523b40"],["/tags/picee/index.html","9b68df9b81887a5074b4fa7dd4b4c32b"],["/tags/picgo/index.html","10c1fb2652b9cec9a844dc9cf6686a03"],["/tags/valine/index.html","c798af6ce4711725d022aca00d31045f"],["/tags/vim/index.html","1d56879c2ec402bb3e2dbd499645cd79"],["/tags/web/index.html","626b749bd0b6d53b67cfe8aaad0a2517"],["/tags/博客/index.html","fd9296264460acc1a33ca1d3b4bbbccd"],["/tags/图床/index.html","0ad9a9a52ccc13a3990627e829d6581e"],["/tags/我的世界/index.html","202a458f34137d7f0770103edb0addc4"],["/tags/提问的智慧/index.html","e0894a9b811f3f4e33ab474f7148532d"],["/tags/进制/index.html","546400c1cb9c51e545d04f011cff3f75"]];
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
