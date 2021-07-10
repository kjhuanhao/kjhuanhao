/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/03/23/archlinuxdesktop/index.html","f6d1a0f4e8f430af9e5179c2fbf917f3"],["/2020/03/23/archlinuxsystem/index.html","1abe442df49fac149248d3a91ce19092"],["/2020/03/23/aria2/index.html","443b7a872fdaac4bb2aed6742c2889e0"],["/2020/03/23/binary/index.html","f3774d153b3de35c668e188c0cd8e2d8"],["/2020/03/23/configvim/index.html","3b5bff961d5a8a534f2f94ebc4650364"],["/2020/03/23/gitssh/index.html","471c281c4e6c13733f0f1e94ffa2e895"],["/2020/03/23/h5ai/index.html","eaa5df63dacee575906038a4553ab56d"],["/2020/03/23/hexobase/index.html","3306a4839e4b97de5535c1bf5ee30598"],["/2020/03/23/learnvim/index.html","ca1941b27e2784690e41b97b787754f8"],["/2020/03/23/manjaro-i3/index.html","b94f05658b3da1e371a63ee32a31cc0f"],["/2020/03/23/markdown/index.html","11b37bf608c526ca3bbf427dc52c47bc"],["/2020/03/23/picee/index.html","e8d165c635d126f9f3d5e0b347a6af69"],["/2020/03/23/picgo/index.html","766e92950d12dccd51980dcdee6f20c5"],["/2020/03/23/prettykde/index.html","98270e4a63468a37f17fb49aa1b46112"],["/2020/03/23/usegit/index.html","7529e3e21efcb9f18ea067c909db9271"],["/2020/03/23/wordpress/index.html","4dd0f03908bb0f1f34a5c0c3eb4f9aee"],["/2020/03/25/emailreply/index.html","0c92f8523300ecdeb3f48520afd58209"],["/2020/03/26/netlifydeploy/index.html","bd057e85338102e2d16fdb39f945c97d"],["/2020/03/28/solvepicnet/index.html","1b117416249baf5948eb62b15ad56d74"],["/2020/03/31/installbrew/index.html","924715ef4ae4272208ca51df6437b099"],["/2020/04/03/gittwossh/index.html","a0e743b2b881c6eb8a944f5373ac3103"],["/2020/04/05/arch-newsil/index.html","7e8ea3aa2a89b8a97ef98443ce3d8cd6"],["/2020/04/21/mcsever/index.html","0889c2a37c072cf560bf4bb11fc99e49"],["/2020/04/23/How-To-Ask/index.html","ae147c96e08ed9ea5f42e3fec0eaf3e6"],["/2021/07/04/new/index.html","c8c59d9c74dd37f1148ddd82a81d7079"],["/about/index.html","9076a4687dbce4b9ff1dcc66fa75912a"],["/archives/2020/03/index.html","b78d6f0f7ec6813541db0ae1a73652fa"],["/archives/2020/03/page/2/index.html","d6c4c795162f8c653ddb62c2ac21ec22"],["/archives/2020/04/index.html","b38157a71c7f5b084e187f2f4e655401"],["/archives/2020/index.html","202e5a70df32e7108a9403dd40dd32fb"],["/archives/2020/page/2/index.html","07815da1c2e03bf670eca7773336b377"],["/archives/2020/page/3/index.html","79b2c1a9e629b6807ff402f5aba82745"],["/archives/2021/07/index.html","8c6813c852b43d5dd7423e3547a48bcf"],["/archives/2021/index.html","2ef565bb2b7f851c3a5768947dd6331d"],["/archives/index.html","d3c2376fb2e55a80026e7abad3ac0a27"],["/archives/page/2/index.html","d3c2376fb2e55a80026e7abad3ac0a27"],["/archives/page/3/index.html","d3c2376fb2e55a80026e7abad3ac0a27"],["/categories/arch/index.html","7c52b0cdf9f1e2a1a7102d9403cdda3f"],["/categories/archlinux/index.html","a848bbd8271b38e38e9cceb7c636b0c2"],["/categories/archlinux/linux/index.html","d3c4218debf5d88b48ca3a52f20ffc13"],["/categories/brew/index.html","b6d2a73806e70aafbdab6b57f2acdd05"],["/categories/git/index.html","ac190bce761e2c0edb2f7842eb1c0d5b"],["/categories/i3wm/index.html","db2c7e6125077e9fd24657ec047a348f"],["/categories/index.html","b71262182d801739447e559d885464e3"],["/categories/linux/index.html","9ad79487c4e21933d1013122462294c1"],["/categories/netlify/index.html","dc61fd465ec5c8c547e2ff4623da9916"],["/categories/picee/index.html","79dbc7499a599ea65517943c77f650f3"],["/categories/picgo/index.html","c50adc1d37dfd62988b11e3bdc120664"],["/categories/valine/index.html","ac2e6d97942a77b1b0ae3dcbac1574e2"],["/categories/vim/index.html","8e9e2b5df2ff9075b2462d1e3159592d"],["/categories/搭建网站/hexo/index.html","1b87ef7d1a11326973ad602389b4b733"],["/categories/搭建网站/index.html","e7311c3fc7aeab5669961dec2a3c42d7"],["/categories/服务器/index.html","908b2910425676954b128a0e0cba14eb"],["/categories/编程/index.html","09d82992a804a4988ab7186017e68e33"],["/categories/转载/index.html","98620261936ee58f1dd7d697f7229a55"],["/css/first.css","6cc7a23f531790422a000e4011795f88"],["/css/style.css","acedc4bf5ed6e6164483a0e7fab9d555"],["/index.html","0e10f28f70d4f447764dd86821b03d3b"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/new/index.html","26d55bcb49982f08178928e19278977f"],["/page/2/index.html","3509ae00f6a4ae9ec9830157e6f30857"],["/page/3/index.html","41ec0dd64a7b84438d430f8c20b06510"],["/sw-register.js","d012e9c50b515e5aea2be0badb5ab2ab"],["/tags/WordPress/index.html","bfe2ccd0a7757b29c62c05569a917f90"],["/tags/arch/index.html","7024f7656c56132ade496291df5a9772"],["/tags/archlinux/index.html","10fd80e853d8368c68dedfb769151ea2"],["/tags/aria2/index.html","aef443c96f1e06a34ec806fb278d6c8b"],["/tags/brew/index.html","e3647f16600d4c69e58d073652daa04a"],["/tags/git/index.html","277885c4e7398df8075d933f62d01ca6"],["/tags/gitssh/index.html","9a11a4ecb38109093c8273e65a027cd6"],["/tags/h5ai/index.html","7e6aba2fe91894c2d8dcc26f82870afa"],["/tags/hexo/index.html","bb6957e34d58d7ca151d1e0704b2974a"],["/tags/i3wm/index.html","c6a157b5218f367dca7479b9f3037693"],["/tags/index.html","4e5029c7c4b67163b18a0c128fa089e4"],["/tags/kde/index.html","e9708c70ff34407120f32a82c681c03b"],["/tags/linux/index.html","dee53554068028a03945d70c9fc19159"],["/tags/manjaro/index.html","59b6f2efbab7cfe0edbb8ad67bc90575"],["/tags/markdown/index.html","5e2a186c1a111a6fccda74886b3e47b8"],["/tags/netlify/index.html","d9f920a878ac0734676e7b22bcf0fa06"],["/tags/picee/index.html","7ff9b3919345ff3aa548152ecb14a68b"],["/tags/picgo/index.html","b2026ea47316a829e98c8089fe595f8b"],["/tags/valine/index.html","e2b6d8d811011ae920fea1a43d187f71"],["/tags/vim/index.html","4b5b8208144e863147ea098dcffa4933"],["/tags/web/index.html","8fc3cc3a40817cb3a2dddbf94d8334ca"],["/tags/博客/index.html","b079b72b858378d669544fd7ea27c912"],["/tags/图床/index.html","291a62b08baece26a388cb844f26a4fe"],["/tags/我的世界/index.html","0a0aa0a0d6b9e8a304cca36fb05d468e"],["/tags/提问的智慧/index.html","95880bec06b42e7a7ad065c273fdda03"],["/tags/进制/index.html","0fd430e488041e6a4d600d4e511a29bb"]];
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
