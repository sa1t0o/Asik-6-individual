let counter = 0;
const counterVal = document.getElementById('counter-value');
function updateCounter(val) {
    counter = val < 0 ? 0 : val;
    counterVal.textContent = counter;
}
document.getElementById('btn-increase').addEventListener('click', () => updateCounter(counter + 1));
document.getElementById('btn-decrease').addEventListener('click', () => updateCounter(counter - 1));
document.getElementById('btn-reset').addEventListener('click', () => updateCounter(0));

const liveInput = document.getElementById('live-input');
const textPreview = document.getElementById('text-preview');
const charCount = document.getElementById('char-count');
liveInput.addEventListener('input', () => {
    charCount.textContent = liveInput.value.length;
    textPreview.textContent = liveInput.value.trim() === '' ? 'Your text will appear here' : liveInput.value;
});
document.getElementById('btn-clear').addEventListener('click', () => {
    liveInput.value = '';
    textPreview.textContent = 'Your text will appear here';
    charCount.textContent = '0';
    liveInput.focus();
});

const imgSelect = document.getElementById('img-select');
const previewImg = document.getElementById('preview-img');
const imgCaption = document.getElementById('img-caption');
const imageData = {
    cat: { src: 'catat.jpg', alt: 'Cat', caption: 'Choosen: Cat' },
    dog: { src: 'dogog.jpg', alt: 'Dog', caption: 'Choosen: Dog' },
};
imgSelect.addEventListener('change', (e) => {
    const data = imageData[e.target.value];
    if (data) {
        previewImg.src = data.src;
        previewImg.alt = data.alt;
        imgCaption.textContent = data.caption;
    }
});

const keyInput = document.getElementById('key-input');
const keyStatus = document.getElementById('key-status');
const keyResult = document.getElementById('key-result');
keyInput.addEventListener('keydown', (e) => {
    keyStatus.textContent = e.key;
    if (e.key === 'Enter') {
        e.preventDefault();
        keyResult.textContent = keyInput.value;
    } else if (e.key === 'Escape') {
        keyInput.value = '';
        keyResult.textContent = '—';
    }
});

const card = document.getElementById('interactive-card');
const eventLog = document.getElementById('event-log');
function setHighlight(active, name) {
    card.classList.toggle('highlight', active);
    eventLog.textContent = name;
}
card.addEventListener('mouseenter', () => setHighlight(true, 'mouseenter'));
card.addEventListener('mouseleave', () => setHighlight(false, 'mouseleave'));
card.addEventListener('focus', () => setHighlight(true, 'focus'));
card.addEventListener('blur', () => setHighlight(false, 'blur'));