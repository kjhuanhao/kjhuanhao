/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/03/23/archlinuxdesktop/index.html","4692f7e3317aa196c6fb963f80c5c1a8"],["/2020/03/23/archlinuxsystem/index.html","299faf3dd7594e62992943375839b478"],["/2020/03/23/aria2/index.html","bce65f4c2f92cd9223df41251acb9a3a"],["/2020/03/23/binary/index.html","81614e1ebd82be0a8dcf4cea3b67f83b"],["/2020/03/23/configvim/index.html","4840511a2721c8f0740845002e17bc42"],["/2020/03/23/gitssh/index.html","7927f6627a1684905d4a92cde1245d68"],["/2020/03/23/h5ai/index.html","add526b0f97d33d64e318b10bc1c8b95"],["/2020/03/23/hexobase/index.html","93d3f5680f8fdd3788b9d4a260381cd7"],["/2020/03/23/learnvim/index.html","446ec3db32db536819d019f95bb5cae2"],["/2020/03/23/manjaro-i3/index.html","4a96fad9314e86731e60f567c53d0e8e"],["/2020/03/23/markdown/index.html","8e7fb467e99bdf429a2f531704209b54"],["/2020/03/23/picee/index.html","d1ce703bd32bdf6ea6e79e73a927ac09"],["/2020/03/23/picgo/index.html","06e77c91001717860dba2b07e15246c5"],["/2020/03/23/prettykde/index.html","633b6bd42c4f2c5ba45f998cc017caa7"],["/2020/03/23/usegit/index.html","e7c06b46f122dae591e9354cb97574aa"],["/2020/03/23/wordpress/index.html","71d164d4898ab92b4190dbbf054d4887"],["/2020/03/25/emailreply/index.html","b39a04a25ff84422a207fdb9ec5e13ec"],["/2020/03/26/netlifydeploy/index.html","838a456ae7735e54512ec956afd3f261"],["/2020/03/28/solvepicnet/index.html","d581e6bd8541a138385ee0b4eb464d98"],["/2020/03/31/installbrew/index.html","72e9a60b11411be910fc256568db7489"],["/2020/04/03/gittwossh/index.html","f8c1ffa04f79a2fff10d28eddb5bc447"],["/2020/04/05/arch-newsil/index.html","6e0c6f482f8878caa9b65dadc6186576"],["/2020/04/21/mcsever/index.html","760ed3d0ea4d45215c83d8fbd0802605"],["/2020/04/23/How-To-Ask/index.html","1b07c077c41def35d609b3187ee532d7"],["/about/index.html","6c3d62b28d078cbd5a5a16b9b6235d87"],["/archives/2020/03/index.html","8f45623d0dfcedf04da79016b4a5260a"],["/archives/2020/03/page/2/index.html","c7e417c1ed6b53b8494393a403d5df50"],["/archives/2020/04/index.html","27d566b95cd1f48d2ebd67f4f8f96bfe"],["/archives/2020/index.html","300c3f6d2e8065b8ac8376d10d967191"],["/archives/2020/page/2/index.html","edff90793d7ff594ab5c50b0bd549765"],["/archives/2020/page/3/index.html","cf58297da74130139866ab8bea5aca47"],["/archives/index.html","271252696c5601b71a7098edcbb4e42c"],["/archives/page/2/index.html","271252696c5601b71a7098edcbb4e42c"],["/archives/page/3/index.html","271252696c5601b71a7098edcbb4e42c"],["/categories/arch/index.html","20e3c1b522135f61e49bf20fae5c6b34"],["/categories/archlinux/index.html","37bc30177105883d9455df1749bad0b8"],["/categories/archlinux/linux/index.html","6b06e88c18d5f8915a27d8919f29fbc8"],["/categories/brew/index.html","13f7b8875b6f4daffd12f3b48b91efc9"],["/categories/git/index.html","ec24e393de0187b3471f4a26d16f604a"],["/categories/i3wm/index.html","e61f04edeac3fe04c77eab954224445d"],["/categories/index.html","83fdaa1a05dd0c6127eca8b7bd79a4e9"],["/categories/linux/index.html","dc18b1d99de234a850b0a0f931c6126b"],["/categories/netlify/index.html","4cfc7f7c8ea7d83274543fc1ad67e21a"],["/categories/picee/index.html","bf508a0bb7226a8cf3447a7efdb1724a"],["/categories/picgo/index.html","2cb9644a2790fc2d006b32c48ff5819b"],["/categories/valine/index.html","6a4c422024d8ebf3ca8426c9383afee5"],["/categories/vim/index.html","e728939e4d448b890706b93e18cf41eb"],["/categories/搭建网站/hexo/index.html","ce8df595cfbdf5c2420835ee05642338"],["/categories/搭建网站/index.html","5656a18acd7b2937f21e48e34aee1539"],["/categories/服务器/index.html","9b34d5b12b8ff5d1000c7447c50d09f0"],["/categories/编程/index.html","d91eafd58341ad77b2f3088f2a949ca7"],["/categories/转载/index.html","18f727881abd78367757c481a74a121f"],["/css/first.css","6cc7a23f531790422a000e4011795f88"],["/css/style.css","acedc4bf5ed6e6164483a0e7fab9d555"],["/index.html","2e1181370886209dcdf677305ed5871c"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","13bcd2e20abf7f1a7f89fd82e6e51b93"],["/page/3/index.html","3ba6347c1d4dfdbdcfde4acdf6446cdf"],["/sw-register.js","18927aadc39bb9c41f648737f92f22d8"],["/tags/WordPress/index.html","32c72ba5ba15528980bc7f2ff144798f"],["/tags/arch/index.html","0a457264d13b7d05a27731259be3e5a4"],["/tags/archlinux/index.html","423a9c60e67f191ed79da2049f84460f"],["/tags/aria2/index.html","06ef45cbc9b00fc250bb2eb1e0aaf898"],["/tags/brew/index.html","10265e92a53b0b3e23ada4cac749f70f"],["/tags/git/index.html","457c806742151bf824596267a0d6f906"],["/tags/gitssh/index.html","82b6c3622d8f7ede10330ece30512c54"],["/tags/h5ai/index.html","24359eed286468c8c7ffd935d77ee619"],["/tags/hexo/index.html","b0f4c75457ec911547a5074848d1cc55"],["/tags/i3wm/index.html","151fdb2d5a7f96c8d833430a67d85496"],["/tags/index.html","8eb43a2bb8d07653f024fa92f34cd523"],["/tags/kde/index.html","d09ba806a383a35737a7013f8714f10a"],["/tags/linux/index.html","499ee7c5c32b2c742839076af6427053"],["/tags/manjaro/index.html","6019b4740a1758c50dbf10d13f16052f"],["/tags/markdown/index.html","9381ebae7504d041a10f3682171babae"],["/tags/netlify/index.html","c2061f99d8a79834a633d25c85384343"],["/tags/picee/index.html","a42da3a1d61202d890b05fb5692f82e4"],["/tags/picgo/index.html","ce6a73b0f30666f8a7d03e5e097cb314"],["/tags/valine/index.html","a01be70baba2d37b91e680bfe3628d8b"],["/tags/vim/index.html","2681538f19301d2aaae56c302052f3c2"],["/tags/web/index.html","57a3d39b26ba423210f8199084c90e7a"],["/tags/博客/index.html","5f150b2d647ae6a750f12456cc07261f"],["/tags/图床/index.html","b48c41b3873e96b68e73a051eb52d942"],["/tags/我的世界/index.html","72befa7515ad366ba5741cbacb23d67b"],["/tags/提问的智慧/index.html","ae9f82345a4ada40b4dbc45cf0c8e4b4"],["/tags/进制/index.html","188a175df7443a3fc6bbe43bd9ce55a7"]];
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
