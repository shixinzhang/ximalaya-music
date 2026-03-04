// ─── 播放 Feed 数据（10 首）─────────────────────────────────────────────
const feedSongs = [
    { id: 101, name: '感官世界（余生有你主题曲）', artist: '林宥嘉', cover: 'https://picsum.photos/seed/yoga1/400/400', category: 'pop' },
    { id: 102, name: '孤勇者', artist: '陈奕迅', cover: 'https://picsum.photos/seed/eason1/400/400', category: 'pop' },
    { id: 103, name: '月亮代表我的心', artist: '邓丽君', cover: 'https://picsum.photos/seed/deng1/400/400', category: 'classic' },
    { id: 104, name: '漠河舞厅', artist: '柳爽', cover: 'https://picsum.photos/seed/musichall/400/400', category: 'pop' },
    { id: 105, name: '甜蜜蜜', artist: '邓丽君', cover: 'https://picsum.photos/seed/deng2/400/400', category: 'classic' },
    { id: 106, name: '如愿', artist: '王菲', cover: 'https://picsum.photos/seed/faye2/400/400', category: 'pop' },
    { id: 107, name: '星空下的安眠曲', artist: '轻音乐工坊', cover: 'https://picsum.photos/seed/sleep99/400/400', category: 'sleep' },
    { id: 108, name: '故乡的云', artist: '费翔', cover: 'https://picsum.photos/seed/fei1/400/400', category: 'classic' },
    { id: 109, name: '海浪声', artist: '自然之声', cover: 'https://picsum.photos/seed/ocean2/400/400', category: 'white' },
    { id: 110, name: '童年', artist: '罗大佑', cover: 'https://picsum.photos/seed/luo1/400/400', category: 'classic' },
];

// 为 feed 歌曲添加歌词
feedSongs.forEach(s => { s.lyrics = generateLyrics(s.name); });

// ─────────────────────────────────────────────────────────────────────────

// 模拟歌曲数据
const songsData = {
    recommend: [
        { id: 1, name: '故乡的云', artist: '费翔', cover: 'https://picsum.photos/seed/music1/300/300', lyrics: generateLyrics('故乡的云') },
        { id: 2, name: '月亮代表我的心', artist: '邓丽君', cover: 'https://picsum.photos/seed/music2/300/300', lyrics: generateLyrics('月亮代表我的心') },
        { id: 3, name: '甜蜜蜜', artist: '邓丽君', cover: 'https://picsum.photos/seed/music3/300/300', lyrics: generateLyrics('甜蜜蜜') },
        { id: 4, name: '大海啊故乡', artist: '朱明瑛', cover: 'https://picsum.photos/seed/music4/300/300', lyrics: generateLyrics('大海啊故乡') },
        { id: 5, name: '我的中国心', artist: '张明敏', cover: 'https://picsum.photos/seed/music5/300/300', lyrics: generateLyrics('我的中国心') },
        { id: 6, name: '军港之夜', artist: '苏小明', cover: 'https://picsum.photos/seed/music6/300/300', lyrics: generateLyrics('军港之夜') },
    ],
    classic: [
        { id: 7, name: '万水千山总是情', artist: '汪明荃', cover: 'https://picsum.photos/seed/classic1/300/300', lyrics: generateLyrics('万水千山总是情') },
        { id: 8, name: '一剪梅', artist: '费玉清', cover: 'https://picsum.photos/seed/classic2/300/300', lyrics: generateLyrics('一剪梅') },
        { id: 9, name: '橄榄树', artist: '齐豫', cover: 'https://picsum.photos/seed/classic3/300/300', lyrics: generateLyrics('橄榄树') },
        { id: 10, name: '童年', artist: '罗大佑', cover: 'https://picsum.photos/seed/classic4/300/300', lyrics: generateLyrics('童年') },
    ],
    pop: [
        { id: 11, name: '孤勇者', artist: '陈奕迅', cover: 'https://picsum.photos/seed/pop1/300/300', lyrics: generateLyrics('孤勇者') },
        { id: 12, name: '漠河舞厅', artist: '柳爽', cover: 'https://picsum.photos/seed/pop2/300/300', lyrics: generateLyrics('漠河舞厅') },
        { id: 13, name: '如愿', artist: '王菲', cover: 'https://picsum.photos/seed/pop3/300/300', lyrics: generateLyrics('如愿') },
        { id: 14, name: '这世界那么多人', artist: '莫文蔚', cover: 'https://picsum.photos/seed/pop4/300/300', lyrics: generateLyrics('这世界那么多人') },
    ],
    sleep: [
        { id: 15, name: '雨打芭蕉', artist: '自然之声', cover: 'https://picsum.photos/seed/sleep1/300/300', lyrics: generateLyrics('雨打芭蕉') },
        { id: 16, name: '深海梦境', artist: '助眠音乐', cover: 'https://picsum.photos/seed/sleep2/300/300', lyrics: generateLyrics('深海梦境') },
        { id: 17, name: '星空下的安眠曲', artist: '轻音乐', cover: 'https://picsum.photos/seed/sleep3/300/300', lyrics: generateLyrics('星空下的安眠曲') },
        { id: 18, name: '森林物语', artist: '自然白噪音', cover: 'https://picsum.photos/seed/sleep4/300/300', lyrics: generateLyrics('森林物语') },
    ],
    white: [
        { id: 19, name: '雨声', artist: '白噪音', cover: 'https://picsum.photos/seed/white1/300/300', lyrics: generateLyrics('雨声') },
        { id: 20, name: '海浪声', artist: '自然之声', cover: 'https://picsum.photos/seed/white2/300/300', lyrics: generateLyrics('海浪声') },
        { id: 21, name: '森林鸟鸣', artist: '大自然', cover: 'https://picsum.photos/seed/white3/300/300', lyrics: generateLyrics('森林鸟鸣') },
        { id: 22, name: '篝火燃烧', artist: '环境音', cover: 'https://picsum.photos/seed/white4/300/300', lyrics: generateLyrics('篝火燃烧') },
    ],
};

// 生成歌词函数
function generateLyrics(songName) {
    const lyricsMap = {
        '故乡的云': [
            { time: 0, text: '天边飘过故乡的云' },
            { time: 4, text: '它不停地向我召唤' },
            { time: 8, text: '当身边的微风轻轻吹起' },
            { time: 12, text: '有个声音在对我呼唤' },
            { time: 16, text: '归来吧 归来哟' },
            { time: 20, text: '浪迹天涯的游子' },
            { time: 24, text: '归来吧 归来哟' },
            { time: 28, text: '别再四处漂泊' },
            { time: 32, text: '踏着沉重的脚步' },
            { time: 36, text: '归乡路是那么漫长' },
            { time: 40, text: '当身边的微风轻轻吹起' },
            { time: 44, text: '吹来故乡泥土的芬芳' },
            { time: 48, text: '归来吧 归来哟' },
            { time: 52, text: '浪迹天涯的游子' },
            { time: 56, text: '归来吧 归来哟' },
            { time: 60, text: '我已厌倦漂泊' },
        ],
        '月亮代表我的心': [
            { time: 0, text: '你问我爱你有多深' },
            { time: 4, text: '我爱你有几分' },
            { time: 8, text: '我的情也真' },
            { time: 10, text: '我的爱也真' },
            { time: 12, text: '月亮代表我的心' },
            { time: 16, text: '你问我爱你有多深' },
            { time: 20, text: '我爱你有几分' },
            { time: 24, text: '我的情不移' },
            { time: 26, text: '我的爱不变' },
            { time: 28, text: '月亮代表我的心' },
            { time: 32, text: '轻轻的一个吻' },
            { time: 36, text: '已经打动我的心' },
            { time: 40, text: '深深的一段情' },
            { time: 44, text: '教我思念到如今' },
        ],
        '甜蜜蜜': [
            { time: 0, text: '甜蜜蜜 你笑得甜蜜蜜' },
            { time: 5, text: '好像花儿开在春风里' },
            { time: 10, text: '开在春风里' },
            { time: 14, text: '在哪里 在哪里见过你' },
            { time: 19, text: '你的笑容这样熟悉' },
            { time: 23, text: '我一时想不起' },
            { time: 28, text: '啊 在梦里' },
            { time: 32, text: '梦里梦里见过你' },
            { time: 37, text: '甜蜜笑得多甜蜜' },
            { time: 42, text: '是你 是你 梦见的就是你' },
        ],
    };
    
    return lyricsMap[songName] || [
        { time: 0, text: '音乐缓缓响起' },
        { time: 5, text: '旋律在心中流淌' },
        { time: 10, text: '沉浸在美妙的音乐中' },
        { time: 15, text: '感受每一个音符' },
        { time: 20, text: '音乐治愈心灵' },
        { time: 25, text: '让我们一起聆听' },
        { time: 30, text: '享受此刻的美好时光' },
    ];
}

// 全局状态
let currentNpIndex = -1; // active feed card index
let npCardsInited = false;
let currentSong = null;
let isPlaying = false;
let currentTime = 0;
let duration = 180; // 默认3分钟
let playInterval = null;
let loopMode = 'list'; // list, single, random
let playbackSpeed = 1.0;
let timerIndex = 0; // index into timerOptions
let timerCountdown = 0; // remaining seconds
let timerInterval = null;
const timerOptions = [0, 10 * 60, 20 * 60, 30 * 60, 60 * 60]; // 关闭, 10min, 20min, 30min, 60min
const timerLabels = ['关闭', '10分钟', '20分钟', '30分钟', '60分钟'];
const loopModes = ['list', 'single', 'random'];
const loopModeIcons = { list: 'fa-list', single: 'fa-redo', random: 'fa-random' };
const loopModeLabels = { list: '顺序播放', single: '单曲循环', random: '随机播放' };
let likedSongs = JSON.parse(localStorage.getItem('likedSongs') || '[]');
let guideShown = localStorage.getItem('guideShown') === 'true';
let heartGuideShown = localStorage.getItem('heartGuideShown') === 'true';

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    renderSongLists();
    initPlayer();
    checkGuide();
    updateHeartTab();
    updateHeroPlayer();
});

// 更新主页大卡片
function updateHeroPlayer() {
    const firstSong = songsData.recommend[0];
    if (firstSong) {
        document.getElementById('hero-cover-img').src = firstSong.cover;
        document.getElementById('hero-title').textContent = `适合一个人听的${firstSong.name}`;
        document.getElementById('hero-artist').textContent = `${firstSong.artist} · 每日更新30首`;
    }
}

// 播放主页推荐
function playHero() {
    const firstSong = songsData.recommend[0];
    if (firstSong) {
        playSong(firstSong.id, 'recommend');
    }
}

// Tab 切换
function initTabs() {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabId = item.dataset.tab;
            
            // 更新 tab 状态
            tabItems.forEach(t => t.classList.remove('active'));
            item.classList.add('active');
            
            // 更新内容
            tabContents.forEach(c => c.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            
            // 切换 tab 时隐藏 now-playing 视图
            hideNowPlaying();
            
            // 检查心动模式引导
            if (tabId === 'heart' && !heartGuideShown) {
                showHeartGuide();
            }
        });
    });
}

// 渲染歌曲列表
function renderSongLists() {
    Object.keys(songsData).forEach(category => {
        const container = document.getElementById(`${category}-list`);
        if (!container) return;
        
        container.innerHTML = songsData[category].map(song => `
            <div class="song-list-item" onclick="playSong(${song.id}, '${category}')">
                <div class="song-list-cover">
                    <img src="${song.cover}" alt="${song.name}">
                </div>
                <div class="song-list-info">
                    <div class="song-list-name">${song.name}</div>
                    <div class="song-list-artist">${song.artist}</div>
                </div>
                <div class="song-list-play">
                    <i class="fas fa-play"></i>
                </div>
            </div>
        `).join('');
    });
}

// 检查新人引导
function checkGuide() {
    if (!guideShown) {
        document.getElementById('guide-overlay').classList.remove('hidden');
    }
}

// 关闭新人引导
function closeGuide() {
    document.getElementById('guide-overlay').classList.add('hidden');
    localStorage.setItem('guideShown', 'true');
    guideShown = true;
}

// 播放歌曲（从列表点击 → 打开 feed，尝试滚动到对应卡片）
function playSong(songId, category) {
    // 先打开 feed
    showNowPlaying();

    // 尝试找到 feed 中匹配的卡片
    const feedIdx = feedSongs.findIndex(s => s.id === songId);
    if (feedIdx >= 0 && feedIdx !== currentNpIndex) {
        const container = document.getElementById('np-scroll-container');
        const card = container.querySelectorAll('.np-card')[feedIdx];
        if (card) card.scrollIntoView({ behavior: 'smooth' });
        // activateCard 会被 IntersectionObserver 触发；也直接激活保险
        setTimeout(() => activateCard(feedIdx), 300);
    }

    // 显示点赞引导
    if (!localStorage.getItem('likeGuideShown')) {
        setTimeout(showLikeGuide, 10000);
    }
}

// ─── 卡片 Feed 初始化 ──────────────────────────────────────────────────

function initNowPlayingCards() {
    if (npCardsInited) return;
    npCardsInited = true;

    const container = document.getElementById('np-scroll-container');
    container.innerHTML = '';

    feedSongs.forEach((song, idx) => {
        container.appendChild(createNpCard(song, idx));
    });

    // IntersectionObserver — 滑到哪张卡片就激活哪首歌
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                const idx = parseInt(entry.target.dataset.songIndex);
                if (idx !== currentNpIndex) activateCard(idx);
            }
        });
    }, {
        root: container,
        threshold: 0.6,
    });

    container.querySelectorAll('.np-card').forEach(card => observer.observe(card));
}

function createNpCard(song, idx) {
    const card = document.createElement('div');
    card.className = 'np-card';
    card.dataset.songIndex = idx;

    card.innerHTML = `
        <span class="np-card-badge">${idx + 1} / ${feedSongs.length}</span>
        <div class="np-card-cover">
            <img src="${song.cover}" alt="${song.name}" loading="lazy">
        </div>
        <div class="np-card-body">
            <div class="np-track-info">
                <h2>${song.name}</h2>
                <p>${song.artist}</p>
            </div>
            <div class="np-lyrics">
                <p class="np-lyric np-lyric-side" id="np-lp-${idx}"></p>
                <p class="np-lyric np-lyric-current" id="np-lc-${idx}">${song.lyrics[0]?.text || '暂无歌词，请欣赏'}</p>
                <p class="np-lyric np-lyric-side" id="np-ln-${idx}">${song.lyrics[1]?.text || ''}</p>
            </div>
            <div class="np-artist-bar">
                <div class="np-artist-info">
                    <div class="np-artist-avatar"><img src="${song.cover}" alt=""></div>
                    <span>${song.artist}</span>
                    <button class="np-subscribe-btn">订阅</button>
                </div>
                <div class="np-actions">
                    <button class="np-action-btn" id="np-like-${idx}" onclick="toggleLike()">
                        <i class="far fa-thumbs-up"></i>
                    </button>
                    <button class="np-action-btn"><i class="fas fa-share-square"></i></button>
                    <button class="np-action-btn" onclick="showLoopSettings()"><i class="fas fa-ellipsis-h"></i></button>
                </div>
            </div>
            <div class="np-card-progress">
                <div class="np-card-progress-fill" id="np-prog-${idx}"></div>
            </div>
        </div>
    `;
    return card;
}

function activateCard(idx) {
    // 标记上一张失活
    const prevCard = document.querySelector('.np-card.active');
    if (prevCard) prevCard.classList.remove('active');

    currentNpIndex = idx;
    currentSong = { ...feedSongs[idx] };
    currentTime = 0;
    isPlaying = true;

    const card = document.querySelector(`.np-card[data-song-index="${idx}"]`);
    if (card) card.classList.add('active');

    updatePlayButton();
    updateLikeButton();
    startPlayback();
}

// ─── 显示 / 隐藏 now-playing 视图 ──────────────────────────────────────

function showNowPlaying() {
    initNowPlayingCards();
    const view = document.getElementById('now-playing-view');
    const appContainer = document.querySelector('.app-container');
    view.classList.add('active');
    appContainer.classList.add('now-playing-active');
    document.querySelectorAll('.tab-content').forEach(c => c.style.visibility = 'hidden');
    // 激活第一张（如果还没激活过）
    if (currentNpIndex < 0) activateCard(0);
}

function hideNowPlaying() {
    const view = document.getElementById('now-playing-view');
    const appContainer = document.querySelector('.app-container');
    view.classList.remove('active');
    appContainer.classList.remove('now-playing-active');
    document.querySelectorAll('.tab-content').forEach(c => c.style.visibility = '');
}

// 渲染歌词（保留内部数据，不再渲染完整列表）
function renderLyrics(lyrics) {
    // 歌词数据已通过 currentSong.lyrics 访问，不需要 DOM 渲染列表
}

// 开始播放
function startPlayback() {
    if (playInterval) clearInterval(playInterval);
    
    playInterval = setInterval(() => {
        if (!isPlaying) return;
        
        currentTime++;
        
        // 内部进度追踪（无可视进度条）
        const progress = (currentTime / duration) * 100; // eslint-disable-line no-unused-vars
        
        // 更新歌词高亮
        updateLyricsHighlight();
        
        // 播放结束
        if (currentTime >= duration) {
            handleSongEnd();
        }
    }, 1000);
}

// 更新3行歌词显示（上一行/当前行/下一行）
function updateLyricsHighlight() {
    if (!currentSong || currentNpIndex < 0) return;
    
    const lyrics = currentSong.lyrics;
    let activeIndex = 0;
    
    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time) activeIndex = i;
    }
    
    const i = currentNpIndex;
    const prevEl = document.getElementById(`np-lp-${i}`);
    const currentEl = document.getElementById(`np-lc-${i}`);
    const nextEl = document.getElementById(`np-ln-${i}`);
    const progFill = document.getElementById(`np-prog-${i}`);
    
    if (prevEl) prevEl.textContent = activeIndex > 0 ? lyrics[activeIndex - 1].text : '';
    if (currentEl) currentEl.textContent = lyrics[activeIndex]?.text || '暂无歌词，请欣赏';
    if (nextEl) nextEl.textContent = activeIndex < lyrics.length - 1 ? lyrics[activeIndex + 1].text : '';
    if (progFill) progFill.style.width = ((currentTime / duration) * 100) + '%';
}

// 格式化时间
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// 播放控制
function togglePlay() {
    isPlaying = !isPlaying;
    updatePlayButton();
}

function updatePlayButton() {
    const icon = document.getElementById('center-play-icon');
    if (icon) {
        icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
    }
}

// 上一首/下一首
function playPrev() {
    if (!currentSong) return;
    
    const songs = songsData[currentSong.category];
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(songs[prevIndex].id, currentSong.category);
}

function playNext() {
    if (!currentSong) return;
    
    if (loopMode === 'random') {
        const songs = songsData[currentSong.category];
        const randomIndex = Math.floor(Math.random() * songs.length);
        playSong(songs[randomIndex].id, currentSong.category);
    } else {
        const songs = songsData[currentSong.category];
        const currentIndex = songs.findIndex(s => s.id === currentSong.id);
        const nextIndex = (currentIndex + 1) % songs.length;
        playSong(songs[nextIndex].id, currentSong.category);
    }
}

// 歌曲结束处理
function handleSongEnd() {
    if (loopMode === 'single') {
        currentTime = 0;
    } else {
        playNext();
    }
}

// 点赞功能
function toggleLike() {
    if (!currentSong) return;
    
    const index = likedSongs.findIndex(s => s.id === currentSong.id);
    if (index === -1) {
        likedSongs.push(currentSong);
        showLikeAnimation();
    } else {
        likedSongs.splice(index, 1);
    }
    
    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
    updateLikeButton();
    updateHeartTab();
    hideLikeGuide();
}

function updateLikeButton() {
    if (!currentSong || currentNpIndex < 0) return;
    
    const btn = document.getElementById(`np-like-${currentNpIndex}`);
    if (!btn) return;
    const isLiked = likedSongs.some(s => s.id === currentSong.id);
    
    btn.innerHTML = isLiked ? '<i class="fas fa-thumbs-up"></i>' : '<i class="far fa-thumbs-up"></i>';
    btn.classList.toggle('liked', isLiked);
}

// 更新心动模式 Tab
function updateHeartTab() {
    const heartTab = document.querySelector('.heart-tab');
    const heartList = document.getElementById('heart-list');
    
    if (likedSongs.length > 0) {
        heartTab.classList.remove('hidden');
        
        // 渲染心动模式内容
        heartList.innerHTML = likedSongs.map(song => `
            <div class="song-list-item" onclick="playSong(${song.id}, '${song.category || 'pop'}')">
                <div class="song-list-cover">
                    <img src="${song.cover}" alt="${song.name}">
                </div>
                <div class="song-list-info">
                    <div class="song-list-name">${song.name}</div>
                    <div class="song-list-artist">${song.artist}</div>
                </div>
                <div class="song-list-play">
                    <i class="fas fa-play"></i>
                </div>
            </div>
        `).join('');
    } else {
        heartList.innerHTML = '<div style="text-align:center;padding:40px;color:#666;">还没有喜欢的歌曲，快去听歌点赞吧~</div>';
    }
}

// 更多操作面板
function showLoopSettings() {
    // 填充歌曲信息头
    if (currentSong) {
        const img = document.getElementById('loop-song-img');
        const title = document.getElementById('loop-song-title');
        const artist = document.getElementById('loop-song-artist');
        if (img) img.src = currentSong.cover;
        if (title) title.textContent = currentSong.name;
        if (artist) artist.textContent = currentSong.artist;
    }
    // 同步播放速度选中状态
    document.querySelectorAll('.speed-chip[data-speed]').forEach(chip => {
        chip.classList.toggle('active', parseFloat(chip.dataset.speed) === playbackSpeed);
    });
    // 同步循环模式标签
    updateLoopModeUI();
    document.getElementById('loop-modal').classList.add('active');
}

function closeLoopSettings() {
    document.getElementById('loop-modal').classList.remove('active');
}

function handleLoopModalBgClick(e) {
    if (e.target === document.getElementById('loop-modal')) {
        closeLoopSettings();
    }
}

function cycleLoopMode() {
    const currentIndex = loopModes.indexOf(loopMode);
    loopMode = loopModes[(currentIndex + 1) % loopModes.length];
    updateLoopModeUI();
}

function updateLoopModeUI() {
    const iconEl = document.getElementById('loop-mode-icon');
    const labelEl = document.getElementById('loop-mode-label');
    const loopBtn = document.getElementById('loop-btn');

    if (iconEl) {
        iconEl.className = `fas ${loopModeIcons[loopMode]}`;
    }
    if (labelEl) {
        labelEl.textContent = loopModeLabels[loopMode];
    }
    // loop-btn no longer exists in DOM, handled via loop-mode-icon in loop sheet
}

function toggleLoop() {
    showLoopSettings();
}

// 播放速度
function selectSpeed(speed) {
    playbackSpeed = speed;
    document.querySelectorAll('.speed-chip[data-speed]').forEach(btn => {
        btn.classList.toggle('active', parseFloat(btn.dataset.speed) === speed);
    });
}

// 定时关闭
function cycleTimer() {
    timerIndex = (timerIndex + 1) % timerOptions.length;
    const secs = timerOptions[timerIndex];

    if (timerInterval) clearInterval(timerInterval);
    timerCountdown = secs;

    if (secs === 0) {
        document.getElementById('timer-display').textContent = '关闭';
        return;
    }

    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timerCountdown--;
        if (timerCountdown <= 0) {
            clearInterval(timerInterval);
            timerCountdown = 0;
            timerIndex = 0;
            document.getElementById('timer-display').textContent = '关闭';
            isPlaying = false;
            updatePlayButton();
        } else {
            updateTimerDisplay();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const el = document.getElementById('timer-display');
    if (!el) return;
    if (timerCountdown <= 0) {
        el.textContent = '关闭';
        return;
    }
    const m = Math.floor(timerCountdown / 60).toString().padStart(2, '0');
    const s = (timerCountdown % 60).toString().padStart(2, '0');
    el.textContent = `${m}:${s}`;
}

// 占位功能
function openShare() { closeLoopSettings(); }
function addToPlaylist() { closeLoopSettings(); }

// 点赞引导
function showLikeGuide() {
    const guide = document.getElementById('like-guide');
    const likeBtn = currentNpIndex >= 0 ? document.getElementById(`np-like-${currentNpIndex}`) : null;
    if (!likeBtn) return;
    guide.classList.add('active');
    
    const rect = likeBtn.getBoundingClientRect();
    guide.style.left = (rect.left + rect.width / 2 - 100) + 'px';
    guide.style.top = (rect.top - 70) + 'px';
    
    localStorage.setItem('likeGuideShown', 'true');
}

function hideLikeGuide() {
    document.getElementById('like-guide').classList.remove('active');
}

// 心动模式引导
function showHeartGuide() {
    const guide = document.getElementById('heart-guide');
    guide.classList.add('active');
    
    // 定位到心动模式 tab
    const heartTab = document.querySelector('.heart-tab');
    const rect = heartTab.getBoundingClientRect();
    guide.style.left = (rect.left + rect.width / 2 - 90) + 'px';
    guide.style.top = (rect.bottom + 12) + 'px';
    
    localStorage.setItem('heartGuideShown', 'true');
    heartGuideShown = true;
    
    // 5秒后自动隐藏
    setTimeout(() => {
        guide.classList.remove('active');
    }, 5000);
}

// 点赞动画
function showLikeAnimation() {
    const btn = currentNpIndex >= 0 ? document.getElementById(`np-like-${currentNpIndex}`) : null;
    if (!btn) return;
    btn.style.transform = 'scale(1.35)';
    setTimeout(() => { btn.style.transform = 'scale(1)'; }, 200);
}

// 初始化播放器
function initPlayer() {
    // 点击订阅导航跳转到心动模式
    document.getElementById('subscribe-nav')?.addEventListener('click', () => {
        const heartTab = document.querySelector('.heart-tab');
        if (heartTab && !heartTab.classList.contains('hidden')) {
            heartTab.click();
        }
    });
}
