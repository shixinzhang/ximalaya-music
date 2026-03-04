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
    dj: [
        { id: 23, name: '电音狂潮', artist: 'DJ小黑', cover: 'https://picsum.photos/seed/dj1/300/300', lyrics: generateLyrics('电音狂潮') },
        { id: 24, name: '夜店嗨曲', artist: 'DJ阿杰', cover: 'https://picsum.photos/seed/dj2/300/300', lyrics: generateLyrics('夜店嗨曲') },
        { id: 25, name: '蹦迪神曲', artist: 'DJ Mix', cover: 'https://picsum.photos/seed/dj3/300/300', lyrics: generateLyrics('蹦迪神曲') },
        { id: 26, name: '车载重低音', artist: 'DJ劲爆', cover: 'https://picsum.photos/seed/dj4/300/300', lyrics: generateLyrics('车载重低音') },
    ],
    fitness: [
        { id: 27, name: '运动节拍', artist: '健身音乐', cover: 'https://picsum.photos/seed/fit1/300/300', lyrics: generateLyrics('运动节拍') },
        { id: 28, name: '燃脂进行时', artist: '动感音乐', cover: 'https://picsum.photos/seed/fit2/300/300', lyrics: generateLyrics('燃脂进行时') },
        { id: 29, name: '力量训练', artist: '健身房', cover: 'https://picsum.photos/seed/fit3/300/300', lyrics: generateLyrics('力量训练') },
        { id: 30, name: '跑步节奏', artist: '运动BGM', cover: 'https://picsum.photos/seed/fit4/300/300', lyrics: generateLyrics('跑步节奏') },
    ],
    zen: [
        { id: 31, name: '禅意', artist: '心灵音乐', cover: 'https://picsum.photos/seed/zen1/300/300', lyrics: generateLyrics('禅意') },
        { id: 32, name: '茶道', artist: '古風', cover: 'https://picsum.photos/seed/zen2/300/300', lyrics: generateLyrics('茶道') },
        { id: 33, name: '冥想', artist: '瑜伽音乐', cover: 'https://picsum.photos/seed/zen3/300/300', lyrics: generateLyrics('冥想') },
        { id: 34, name: '太极', artist: '养生音乐', cover: 'https://picsum.photos/seed/zen4/300/300', lyrics: generateLyrics('太极') },
    ]
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
        { time: 0, text: '音乐响起' },
        { time: 5, text: '旋律流淌' },
        { time: 10, text: '沉浸在音乐的世界里' },
        { time: 15, text: '感受每一个音符' },
        { time: 20, text: '音乐治愈心灵' },
        { time: 25, text: '让我们一起聆听' },
        { time: 30, text: '享受此刻的美好' },
    ];
}

// 全局状态
let currentSong = null;
let isPlaying = false;
let currentTime = 0;
let duration = 180; // 默认3分钟
let playInterval = null;
let loopMode = 'list'; // list, single, random
let likedSongs = JSON.parse(localStorage.getItem('likedSongs') || '[]');
let guideShown = localStorage.getItem('guideShown') === 'true';
let heartGuideShown = localStorage.getItem('heartGuideShown') === 'true';

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    renderSongs();
    initPlayer();
    checkGuide();
    updateHeartTab();
});

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
            
            // 检查心动模式引导
            if (tabId === 'heart' && !heartGuideShown) {
                showHeartGuide();
            }
        });
    });
}

// 渲染歌曲列表
function renderSongs() {
    Object.keys(songsData).forEach(category => {
        const container = document.getElementById(category)?.querySelector('.song-grid');
        if (!container) return;
        
        container.innerHTML = songsData[category].map(song => `
            <div class="song-card" onclick="playSong(${song.id}, '${category}')">
                <div class="song-cover">
                    <img src="${song.cover}" alt="${song.name}">
                    <div class="song-play-icon">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="song-info-card">
                    <div class="song-name">${song.name}</div>
                    <div class="song-artist">${song.artist}</div>
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

// 播放歌曲
function playSong(songId, category) {
    const song = songsData[category]?.find(s => s.id === songId);
    if (!song) return;
    
    currentSong = { ...song, category };
    currentTime = 0;
    isPlaying = true;
    
    // 更新播放器界面
    document.getElementById('player-cover').src = song.cover;
    document.getElementById('player-song-name').textContent = song.name;
    document.getElementById('player-artist').textContent = song.artist;
    
    // 渲染歌词
    renderLyrics(song.lyrics);
    
    // 显示播放器
    document.getElementById('player-page').classList.add('active');
    document.getElementById('cover-disc').classList.add('playing');
    
    // 更新播放按钮
    updatePlayButton();
    
    // 检查点赞状态
    updateLikeButton();
    
    // 开始播放
    startPlayback();
    
    // 显示点赞引导
    if (!localStorage.getItem('likeGuideShown')) {
        setTimeout(showLikeGuide, 10000);
    }
}

// 渲染歌词
function renderLyrics(lyrics) {
    const lyricsList = document.getElementById('lyrics-list');
    lyricsList.innerHTML = lyrics.map((line, index) => `
        <div class="lyric-item" data-index="${index}" data-time="${line.time}">${line.text}</div>
    `).join('');
}

// 开始播放
function startPlayback() {
    if (playInterval) clearInterval(playInterval);
    
    playInterval = setInterval(() => {
        if (!isPlaying) return;
        
        currentTime++;
        
        // 更新进度条
        const progress = (currentTime / duration) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('current-time').textContent = formatTime(currentTime);
        document.getElementById('total-time').textContent = formatTime(duration);
        
        // 更新歌词高亮
        updateLyricsHighlight();
        
        // 播放结束
        if (currentTime >= duration) {
            handleSongEnd();
        }
    }, 1000);
}

// 更新歌词高亮
function updateLyricsHighlight() {
    if (!currentSong) return;
    
    const lyrics = currentSong.lyrics;
    const lyricsItems = document.querySelectorAll('.lyric-item');
    
    let activeIndex = -1;
    
    // 找到当前播放的歌词
    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time) {
            activeIndex = i;
        }
    }
    
    // 更新歌词样式
    lyricsItems.forEach((item, index) => {
        item.classList.remove('active', 'played');
        if (index < activeIndex) {
            item.classList.add('played');
        } else if (index === activeIndex) {
            item.classList.add('active');
            // 滚动到当前歌词
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
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
    
    if (isPlaying) {
        document.getElementById('cover-disc').classList.add('playing');
    } else {
        document.getElementById('cover-disc').classList.remove('playing');
    }
}

function updatePlayButton() {
    const btn = document.getElementById('play-btn');
    btn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
}

// 关闭播放器
function closePlayer() {
    document.getElementById('player-page').classList.remove('active');
    document.getElementById('cover-disc').classList.remove('playing');
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
    if (!currentSong) return;
    
    const btn = document.getElementById('like-btn');
    const isLiked = likedSongs.some(s => s.id === currentSong.id);
    
    btn.innerHTML = isLiked ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
    if (isLiked) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
}

// 更新心动模式 Tab
function updateHeartTab() {
    const heartTab = document.querySelector('.heart-tab');
    const heartContent = document.getElementById('heart');
    
    if (likedSongs.length > 0) {
        heartTab.classList.remove('hidden');
        
        // 渲染心动模式内容
        const container = heartContent.querySelector('.song-grid');
        container.innerHTML = likedSongs.map(song => `
            <div class="song-card" onclick="playSong(${song.id}, '${song.category}')">
                <div class="song-cover">
                    <img src="${song.cover}" alt="${song.name}">
                    <div class="song-play-icon">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="song-info-card">
                    <div class="song-name">${song.name}</div>
                    <div class="song-artist">${song.artist}</div>
                </div>
            </div>
        `).join('');
    }
}

// 循环模式设置
function showLoopSettings() {
    document.getElementById('loop-modal').classList.add('active');
}

function closeLoopSettings() {
    document.getElementById('loop-modal').classList.remove('active');
}

function selectLoopMode(mode) {
    loopMode = mode;
    
    // 更新 UI
    document.querySelectorAll('.loop-option').forEach(opt => {
        opt.classList.remove('active');
    });
    document.querySelector(`.loop-option[data-mode="${mode}"]`).classList.add('active');
    
    // 更新按钮图标
    const loopBtn = document.getElementById('loop-btn');
    const icons = {
        list: 'fa-list',
        single: 'fa-redo',
        random: 'fa-random'
    };
    loopBtn.innerHTML = `<i class="fas ${icons[mode]}"></i>`;
    
    closeLoopSettings();
}

function toggleLoop() {
    showLoopSettings();
}

// 点赞引导
function showLikeGuide() {
    const guide = document.getElementById('like-guide');
    guide.classList.add('active');
    
    // 定位到点赞按钮附近
    const likeBtn = document.getElementById('like-btn');
    const rect = likeBtn.getBoundingClientRect();
    guide.style.left = (rect.left + rect.width / 2 - 80) + 'px';
    guide.style.top = (rect.top - 60) + 'px';
    
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
    guide.style.left = (rect.left + rect.width / 2 - 80) + 'px';
    guide.style.top = (rect.bottom + 10) + 'px';
    
    localStorage.setItem('heartGuideShown', 'true');
    heartGuideShown = true;
    
    // 5秒后自动隐藏
    setTimeout(() => {
        guide.classList.remove('active');
    }, 5000);
}

// 点赞动画
function showLikeAnimation() {
    const btn = document.getElementById('like-btn');
    btn.style.transform = 'scale(1.3)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 200);
}

// 初始化播放器
function initPlayer() {
    // 进度条点击
    const progressBar = document.getElementById('progress-bar');
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        currentTime = Math.floor(percent * duration);
        document.getElementById('progress-fill').style.width = (percent * 100) + '%';
    });
    
    // 底部导航切换
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            this.classList.add('active');
            
            // 点击喜欢切换到心动模式
            if (this.id === 'like-nav') {
                document.querySelector('.heart-tab').click();
            }
        });
    });
}
