document.addEventListener('DOMContentLoaded', () => {
    if (typeof charInfo === 'undefined') {
        alert(t('load_error'));
        return;
    }

    const pinyinInput = document.getElementById('pinyin-input');
    const pinyinCharContainer = document.getElementById('pinyin-char-buttons');
    const pinyinMatchCountLabel = document.getElementById('pinyin-match-count');
    const clearPinyinBtn = document.getElementById('clear-pinyin-btn');


    function filterCharsByPinyin() {
        pinyinCharContainer.innerHTML = '';
        const query = pinyinInput.value.toLowerCase().trim();

        if (!query) {
            pinyinCharContainer.innerHTML = `<p class="hint">${t('pinyin_hint')}</p>`;
            pinyinMatchCountLabel.textContent = '0';
            return;
        }

        const matchedEntries = Object.entries(charLookupReverse)
            .filter(([pinyin, char]) => pinyin.startsWith(query))
            .sort((entry1, entry2) => entry1[0].localeCompare(entry2[0]));

        const matchedChars = matchedEntries
            .map(([pinyin, char]) => [char, pinyin === query]);

        pinyinMatchCountLabel.textContent = matchedChars.length;

        if (matchedChars.length === 0) {
            pinyinCharContainer.innerHTML = `<p class="hint">${t('pinyin_no_match')}</p>`;
        } else {
            matchedChars.forEach(([char, exact]) => {
                const btn = createCharButton(char, exact);
                if (btn) pinyinCharContainer.appendChild(btn);
            });
        }
    }

    pinyinInput.addEventListener('input', filterCharsByPinyin);

    function flushPinyinExactMatches() {
        const elements = pinyinCharContainer.querySelectorAll('.exact-match');
        console.log(elements);
        if (elements.length === 0) return;

        const chars = Array.from(elements).map(elem => elem.textContent);
        const str = chars.join('');
        insertAtCursor(editor, str);
        clearPinyin();
    }

    pinyinInput.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') flushPinyinExactMatches();
    });

    function clearPinyin() {
        pinyinInput.value = "";
        filterCharsByPinyin();
        pinyinInput.focus();
    }

    clearPinyinBtn.addEventListener('click', clearPinyin);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('panel-pinyin').classList.contains('active')) {
                if (document.activeElement === pinyinInput) {
                    clearPinyin();
                }
            }
        }
    });

    whenPanelActivates['pinyin'] = () => {
        filterCharsByPinyin();
        pinyinInput.focus();
    };
});