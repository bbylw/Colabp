const html = `<!DOCTYPE html>
<html lang="zh">
<!-- 这里是完整的 index.html 内容 -->
${document.querySelector('edited_file[filename="index.html"]').textContent}`;

async function handleSubscription(type) {
    const baseUrl = 'https://colad.xyhk.us.kg';
    
    const headers = {
        'Content-Type': 'text/plain;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
    };

    try {
        const response = await fetch(`${baseUrl}/api/${type}`);
        if (!response.ok) {
            throw new Error('Subscription fetch failed');
        }
        const content = await response.text();
        return new Response(content, { headers });
    } catch (error) {
        console.error('Subscription error:', error);
        return new Response('获取订阅失败，请稍后重试', { 
            status: 500,
            headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
        });
    }
}

async function handleRequest(request) {
    const url = new URL(request.url);
    
    // 处理API请求
    if (url.pathname.startsWith('/api/')) {
        const route = url.pathname.split('/')[2];
        return handleSubscription(route);
    }
    
    // 返回主页
    return new Response(html, {
        headers: {
            'Content-Type': 'text/html;charset=UTF-8',
            'Cache-Control': 'public, max-age=600'
        },
    });
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
}); 