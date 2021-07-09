/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/03/23/archlinuxdesktop/index.html","b9533ba8b69f998299c77ecfdac81346"],["/2020/03/23/archlinuxsystem/index.html","d1ae6a343ef13d94bd682422bff802a8"],["/2020/03/23/aria2/index.html","73b2fb27a4c0f58b50ea5296cf9918ce"],["/2020/03/23/binary/index.html","c7592ff245578fbeb6a1e970fdffe58d"],["/2020/03/23/configvim/index.html","0a961bf013b6f8f1d08f45e47916d9cd"],["/2020/03/23/gitssh/index.html","b631fadb6da6c13821681ff76ea34131"],["/2020/03/23/h5ai/index.html","dc8531df563ed3ca57012e801f4bf921"],["/2020/03/23/hexobase/index.html","8bbb6b86be7e5389ad8da101dc0dd024"],["/2020/03/23/learnvim/index.html","bb66565c664c59d1dd957c586fe12d39"],["/2020/03/23/manjaro-i3/index.html","801d42eb31222e3684a13a0190e3adae"],["/2020/03/23/markdown/index.html","17c46302918dd0a4099835377ddc45d6"],["/2020/03/23/picee/index.html","9c0e9ff26da3e3f5010ec6fc474fb986"],["/2020/03/23/picgo/index.html","b0fe05f502e0e44e836a0bc9edd4777f"],["/2020/03/23/prettykde/index.html","035ed4910f39c4481ca5d56c943581e2"],["/2020/03/23/usegit/index.html","c2b165398b5dddaee72816c1fc064754"],["/2020/03/23/wordpress/index.html","93d3d1a1f063d83aa178646ea04e911d"],["/2020/03/25/emailreply/index.html","bcc0ff4066bbce3cee675ca406166247"],["/2020/03/26/netlifydeploy/index.html","ad137500f0a4ce6cd334b3501f3c8342"],["/2020/03/28/solvepicnet/index.html","cfbccd9a0aa326042cb290ff6ab95cf5"],["/2020/03/31/installbrew/index.html","d2d43cc332920f8e19f4fd9f6fe3c594"],["/2020/04/03/gittwossh/index.html","e372da36fc121691f3d60d607c3f568a"],["/2020/04/05/arch-newsil/index.html","0fac4d649f8f2c20626033e460eb3191"],["/2020/04/21/mcsever/index.html","0188d0cb7268a61ce2efdd3fb0aac4e9"],["/2020/04/23/How-To-Ask/index.html","074e9d405654cef05f8b5d0bc8c84fd1"],["/2021/07/04/new/index.html","171edfd9bdd66270c8d0a9d9ea505e41"],["/about/index.html","fce2a2e7fa05231425bf64f74c25d3fb"],["/archives/2020/03/index.html","70fd161d61beb16eb98c7b0f1cdfe5e0"],["/archives/2020/03/page/2/index.html","10ea6333cd58a8c6821d796a208f8c3f"],["/archives/2020/04/index.html","24411787efd890996e2ace0370d74c90"],["/archives/2020/index.html","3528eacb9c686c5deedb489cd9b3eb09"],["/archives/2020/page/2/index.html","d6a50048ad1fd4db18057ee04895e09f"],["/archives/2020/page/3/index.html","c25af994a2102dd69b4bcab4e69da4ea"],["/archives/2021/07/index.html","09f43e8ee5807d1917672a7e1fc3d9bd"],["/archives/2021/index.html","ca732e254efdc1f7925a01a7efe7ad01"],["/archives/index.html","bf7badd93307a4a6a91ab7007c0b3955"],["/archives/page/2/index.html","bf7badd93307a4a6a91ab7007c0b3955"],["/archives/page/3/index.html","bf7badd93307a4a6a91ab7007c0b3955"],["/categories/arch/index.html","2cea8f78a21f33020506c533004dc135"],["/categories/archlinux/index.html","b520336630886f047edd657c4b509da4"],["/categories/archlinux/linux/index.html","b594db2019d5c34c8a2327c2af2d566b"],["/categories/brew/index.html","6efa67ad42b13c523054fb987ff54b2d"],["/categories/git/index.html","6ae3627b10262af3c7165dea39400496"],["/categories/i3wm/index.html","a42e069775078828fb1e2148bf42216f"],["/categories/index.html","a1e1800690f1adc7110afeb95138a9fa"],["/categories/linux/index.html","fc98a02c5de266f1911ef1f7605aaa81"],["/categories/netlify/index.html","0553589b95d529905c6672ae514e4d32"],["/categories/picee/index.html","bf4c337d418c999cce13681fae255ed3"],["/categories/picgo/index.html","e5b04bfb601d334c9ed88867d869380f"],["/categories/valine/index.html","a3ca3207703898359d363dec54d51c01"],["/categories/vim/index.html","e67367ef6ed005ce4e29ecf17e4c8812"],["/categories/搭建网站/hexo/index.html","bbbfbcee4699a02da2d92d525b1c180b"],["/categories/搭建网站/index.html","a96dc8843aa2edf05bb65cbc1ba50c0a"],["/categories/服务器/index.html","226d428071553f953289ab1c5136de40"],["/categories/编程/index.html","9731871e996ab2d4c6f1b140bad0b5be"],["/categories/转载/index.html","0c991965ae46db1c90c0ef5073f5dcfb"],["/css/first.css","6cc7a23f531790422a000e4011795f88"],["/css/style.css","acedc4bf5ed6e6164483a0e7fab9d555"],["/index.html","cc65c26fe398f23842906cf3351f46f5"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/new/index.html","b1951aebad24c4523fc3b810eb7ba2d5"],["/page/2/index.html","0243f217bd8a436ea1274d45b5c16b07"],["/page/3/index.html","7cb3b8177478be9098779375e8885acf"],["/sw-register.js","f69fad6556d99d23b797fff8dfa5a18a"],["/tags/WordPress/index.html","ed85c06ce64cd8118ad40bf34040ef1d"],["/tags/arch/index.html","09782a474897fec683990f6c85a1175f"],["/tags/archlinux/index.html","91d6b615a1803f5e046d1f67a4e7ea41"],["/tags/aria2/index.html","15d8fd081ad338903bb9bd93605ad2cd"],["/tags/brew/index.html","1efc0e4c1c2cb5e818f4c8306deab6a3"],["/tags/git/index.html","8621321b2020615592216cc8f4c742db"],["/tags/gitssh/index.html","ac4e0df5e1fefe6081ba84eaedd9589e"],["/tags/h5ai/index.html","8087b59880efef9718ec057f3ebd5a42"],["/tags/hexo/index.html","38388de6f99ad5b21aeb2e76e9d6c38d"],["/tags/i3wm/index.html","baef67f0214c5f9f34fbfd69308a32e6"],["/tags/index.html","123a99a29ec45a7040c4f2b8cfa7adaa"],["/tags/kde/index.html","6a9d28df01c9d1663440086729d7111f"],["/tags/linux/index.html","adf3f48db8419cdd68c440be56f82004"],["/tags/manjaro/index.html","9042837112dd8422ffac590fce83e033"],["/tags/markdown/index.html","199106d21527edc5e984336d1141472d"],["/tags/netlify/index.html","7e097488c91e127b4f2eca81c08c27f0"],["/tags/picee/index.html","0fd14ae22ebebfd484f378249506ff8f"],["/tags/picgo/index.html","7cd223cfa8e7e62c4fe89d55c8c040d2"],["/tags/valine/index.html","bac9bce5f6e7dbec6f836f3b8520fa8b"],["/tags/vim/index.html","066142a1714819691ea02701736d60ae"],["/tags/web/index.html","32497a8e3b36bf3a1aec10ad0f01050c"],["/tags/博客/index.html","d89d64530653e6a900ad9e1f9f2ecbc8"],["/tags/图床/index.html","d6ae2b59157f14c2e835ba9c096df38c"],["/tags/我的世界/index.html","b9204a6f49796d7aec7e13ce50d7ee3c"],["/tags/提问的智慧/index.html","9473640c3c48545427c90cccce082744"],["/tags/进制/index.html","9713dc9ba90ac1ce6399dbfb47f86040"]];
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
