/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/03/23/archlinuxdesktop/index.html","7dac0bf9a271ba82693835a0c63b13bc"],["/2020/03/23/archlinuxsystem/index.html","9f1b3747cc390b2e296faa7521fb68ed"],["/2020/03/23/aria2/index.html","105c4899f19af63a81e7c72ca08ecaff"],["/2020/03/23/binary/index.html","14f13442944b9aa34cda84655d51248b"],["/2020/03/23/configvim/index.html","48e76bdaeed1868b6ec77095970b7df3"],["/2020/03/23/gitssh/index.html","eebcb460cbb37b90ffae1b66072d9cab"],["/2020/03/23/h5ai/index.html","40aba9b4f81a6ca602aeab635e022bef"],["/2020/03/23/hexobase/index.html","264eb953268b83538f30d74e605748ca"],["/2020/03/23/learnvim/index.html","57a6f34297df1712a7b13f3aa01f5ba5"],["/2020/03/23/manjaro-i3/index.html","3db15c1f32b9de851d1039d83b1dfb54"],["/2020/03/23/markdown/index.html","e6cd9b1acd074f0d44ca564d6aedd40d"],["/2020/03/23/picee/index.html","c9cafc4daf7294ceea214e01692e05f0"],["/2020/03/23/picgo/index.html","a8fc826cbf0bc0fcb5ccba23121bcc91"],["/2020/03/23/prettykde/index.html","1e9d7056d6ca7c13f45485cbc44e8e7a"],["/2020/03/23/usegit/index.html","d8b1daf61b836277956b2ed3db4ea04b"],["/2020/03/23/wordpress/index.html","c208a0a3bc0526d45cc8a8e2a1ada67a"],["/2020/03/25/emailreply/index.html","4327a868fae598fa490375c2994374f4"],["/2020/03/26/netlifydeploy/index.html","bac5676207430c011a0934d5b056f9d1"],["/2020/03/28/solvepicnet/index.html","63968bdaef4e2e6ff59af9598ff2e559"],["/2020/03/31/installbrew/index.html","1e4f820438831e57fcdeb59d64d9beb1"],["/2020/04/03/gittwossh/index.html","de87208baf76276c564a3c0ad744c492"],["/2020/04/05/arch-newsil/index.html","3eaddb9fc4cf317317aecb624d300292"],["/2020/04/21/mcsever/index.html","ae7140e1ffc60b0dbafaaabadf00a388"],["/2020/04/23/How-To-Ask/index.html","a0ed1da0bfd055002ac527237778d273"],["/about/index.html","4a9dd6bcd28ec979891b3f0cfa2fbf54"],["/archives/2020/03/index.html","d3fd5a01bf15c8ad42d1bbb628578193"],["/archives/2020/03/page/2/index.html","d7c3a9fe475ce84f868c964a5061f38c"],["/archives/2020/04/index.html","fd9283cdd6ac4141ed6edd47b7b3d870"],["/archives/2020/index.html","8666d8ed005b0e6357522c9fa5b97b01"],["/archives/2020/page/2/index.html","3d63bc39a7339c7b71ec87a63d7863a4"],["/archives/2020/page/3/index.html","76c76dd01bed3f386a9004fb16761009"],["/archives/index.html","f9afd9c26922eccd536e669955f1c540"],["/archives/page/2/index.html","f9afd9c26922eccd536e669955f1c540"],["/archives/page/3/index.html","f9afd9c26922eccd536e669955f1c540"],["/categories/arch/index.html","86c55532eb5d4bfac89967619e9aaaac"],["/categories/archlinux/index.html","36c7e7a5efd6a359c02a4144f54f1187"],["/categories/archlinux/linux/index.html","8dd2302f792234e1b8cf6eceb6abaf32"],["/categories/brew/index.html","5657feef15c4cf0dfe7d5e4e7209e954"],["/categories/git/index.html","754aa32234e9c6eae54700522cf8b713"],["/categories/i3wm/index.html","d6067aef46d69f7dbb9558dc0ae3caee"],["/categories/index.html","7c8cffbd7a6871ceb5629eeb267999a0"],["/categories/linux/index.html","635727da45ddc08bedb3e2415404ec03"],["/categories/netlify/index.html","0243dea0ed60b2c40c8cbce07bc4bf6e"],["/categories/picee/index.html","b2e8a77054fedbfe47eff12d805cec57"],["/categories/picgo/index.html","4563f8e346817e0854f4ef65d0d2fd0b"],["/categories/valine/index.html","865ac158c765d7ee9b9a82a007e10422"],["/categories/vim/index.html","bdaf8de94b99d87303f059fa7e25fa59"],["/categories/搭建网站/hexo/index.html","306652c3e24d68edb0ffae3a6a0058bc"],["/categories/搭建网站/index.html","bb1b21a749e3dc265326cf5ada7daacf"],["/categories/服务器/index.html","c1d50083ba14b7f57dae2a3f2da99028"],["/categories/编程/index.html","6145ade056a7211ba1a61a92af984f7f"],["/categories/转载/index.html","ee5e57d9968b9e95ff64363f0bf422b0"],["/css/first.css","6cc7a23f531790422a000e4011795f88"],["/css/style.css","acedc4bf5ed6e6164483a0e7fab9d555"],["/index.html","3528139f17d4e843264f9aead3852b34"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","49b966ed7d47ad832ef90fbddd5aa253"],["/page/3/index.html","30e7d4cecdfa4d2d57c4f8cb6dbf1f09"],["/sw-register.js","ce2816c9356dc135d57f0fd990603d54"],["/tags/WordPress/index.html","564f725861fd60f7a305f7c7e057ff48"],["/tags/arch/index.html","1d1f720198207b8b0cff875e5447c49b"],["/tags/archlinux/index.html","6d51f55496fe7f284b2bb9fe1463d5f7"],["/tags/aria2/index.html","a27d881b43eb9b5a34e7cae50b6c4e39"],["/tags/brew/index.html","a8677eef688d4a4fbcfe383e3e2b9b7d"],["/tags/git/index.html","5252bfbdfa657a8bc020001ea2611ae5"],["/tags/gitssh/index.html","bbec31b949ff55c4e734287ab3555b3b"],["/tags/h5ai/index.html","c30f0dfead61515a179fd402b626c5a3"],["/tags/hexo/index.html","7150bf27cffb57c13305d7427ad5b82c"],["/tags/i3wm/index.html","176063db3550113255641c7ac9592105"],["/tags/index.html","e37cc919fe453adab82e31cd8b3cdc3b"],["/tags/kde/index.html","96a081851076dd7f075993029428d0b0"],["/tags/linux/index.html","10491d9ae776e83fbdb9959f2e1764ec"],["/tags/manjaro/index.html","7435c9750e7690960665cb57e1a14987"],["/tags/markdown/index.html","847729a7bafc3017d4855b18b2928048"],["/tags/netlify/index.html","969f040b08790832b311302df3c598ea"],["/tags/picee/index.html","f5dee09dac1296e2c6db0bbf025afa13"],["/tags/picgo/index.html","188e15a5b0e2f37ae5d0bd609471ad78"],["/tags/valine/index.html","d74d1441ac313a463cf12d0563288b29"],["/tags/vim/index.html","2e858c62cdfd5d826b4c8db4e0cecaf3"],["/tags/web/index.html","154a81b2528cb6bede4ed916541d69ed"],["/tags/博客/index.html","c1df653bf583b44d8d74fef82a5a34b4"],["/tags/图床/index.html","6250d6ee7d601b68c9690897c0ffa136"],["/tags/我的世界/index.html","f2f133ff326add6d5cd3e206215c0e13"],["/tags/提问的智慧/index.html","a97b21f3b1c8400ed255b5fb432b4f57"],["/tags/进制/index.html","94b1b3761ca8131b17100ac7f45c361f"]];
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
