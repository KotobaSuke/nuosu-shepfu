const translations = {
    zh: {
        title: "ꎹꃚ / SHEPFU",
        subtitle: "凉山规范彝文检字编辑器",
        editor_placeholder: "在此处输入或点击下方按钮插入字符...",
        copy_btn: "📋 复制文本",
        copied: "✅ 已复制",
        info_default: "悬停在字符上查看详细信息",
        tab_radical: "部首检字",
        tab_stroke: "笔画检字（测试）",
        trans_label: "拉丁转写:",
        
        radical_select_title: "选择部首",
        radical_list_title: "字符列表",
        radical_no_selection: "未选择",
        radical_empty: "该部首下暂无字符",
        radical_stroke_0: "零画",
        radical_stroke_1: "一画",
        radical_stroke_2: "二画",
        radical_stroke_3: "三画",
        radical_stroke_4: "四画",
        radical_stroke_5: "五画及以上",
        
        stroke_input_title: "笔画输入",
        stroke_clear_btn: "清空笔画 (Esc)",
        stroke_keyboard_title: "笔画键盘",
        stroke_match_title: "匹配字符",
        stroke_count_suffix: "个结果",
        stroke_hint: "请输入笔画以筛选字符",
        stroke_no_match: "未找到匹配字符",

        tab_pinyin: "拉丁转写检字",
        pinyin_input_title: "转写输入",
        pinyin_placeholder: "输入拉丁转写：",
        pinyin_clear_btn: "清空 (Esc)",
        pinyin_match_title: "匹配字符",
        pinyin_hint: "输入拉丁转写以筛选字符（从前侧匹配）",
        pinyin_no_match: "未找到匹配字符",
        
        info_char: "字符",
        info_pinyin: "拉丁转写",
        info_strokes: "笔画",
        info_none: "无",

        load_error: "加载错误",
        copy_empty: "文本框为空，无法复制。",
        copy_error: "复制错误",
        copy_error_alert: "复制错误。"
    },
    en: {
        title: "ꎹꃚ / SHEPFU",
        subtitle: "Nuosu Yi Syllabary Character Finder & Editor",
        editor_placeholder: "Type here or click buttons to insert characters...",
        copy_btn: "📋 Copy Text",
        copied: "✅ Copied",
        info_default: "Hover over a character for details",
        tab_radical: "By Radical",
        tab_stroke: "By Stroke (Beta)",
        trans_label: "Romanization:",
        
        radical_select_title: "Select Radical",
        radical_list_title: "Character List",
        radical_no_selection: "None selected",
        radical_empty: "No characters under this radical",
        radical_stroke_0: "0 strokes",
        radical_stroke_1: "1 stroke",
        radical_stroke_2: "2 strokes",
        radical_stroke_3: "3 strokes",
        radical_stroke_4: "4 strokes",
        radical_stroke_5: "5+ strokes",
        
        stroke_input_title: "Stroke Input",
        stroke_clear_btn: "Clear Strokes (Esc)",
        stroke_keyboard_title: "Stroke Keyboard",
        stroke_match_title: "Matched Characters",
        stroke_count_suffix: "result(s) matched",
        stroke_hint: "Enter strokes to filter characters",
        stroke_no_match: "No matching characters found",

        tab_pinyin: "By Romanization",
        pinyin_input_title: "Romanization Input",
        pinyin_placeholder: "Enter romanization:",
        pinyin_clear_btn: "Clear (Esc)",
        pinyin_match_title: "Matched Characters",
        pinyin_hint: "Enter romanization to filter (prefix match)",
        pinyin_no_match: "No matching characters found",
        
        info_char: "Char",
        info_pinyin: "Romanization",
        info_strokes: "Strokes",
        info_none: "None",

        load_error: "Load Error",
        copy_empty: "No characters to be copy.",
        copy_error: "Copy Error",
        copy_error_alert: "Copy error."
    },
    ja: {
        title: "ꎹꃚ / SHEPFU",
        subtitle: "涼山規範彝（イ）文字検索・エディタ",
        editor_placeholder: "ここに入力するか、ボタンをクリックして文字を挿入...",
        copy_btn: "📋 テキストをコピー",
        copied: "✅ コピーしました",
        info_default: "文字の上にマウスを乗せると詳細が表示されます",
        tab_radical: "部首で検索",
        tab_stroke: "筆画で検索 (ベータ)",
        trans_label: "ローマ字表記:",
        
        radical_select_title: "部首を選択",
        radical_list_title: "文字リスト",
        radical_no_selection: "未選択",
        radical_empty: "この部首に文字はありません",
        radical_stroke_0: "〇画",
        radical_stroke_1: "一画",
        radical_stroke_2: "二画",
        radical_stroke_3: "三画",
        radical_stroke_4: "四画",
        radical_stroke_5: "五画以上",
        
        stroke_input_title: "筆画入力",
        stroke_clear_btn: "クリア (Esc)",
        stroke_keyboard_title: "筆画キーボード",
        stroke_match_title: "一致する文字",
        stroke_count_suffix: "件一致",
        stroke_hint: "筆画を入力して文字をフィルタリング",
        stroke_no_match: "一致する文字が見つかりません",

        tab_pinyin: "ローマ字で検索",
        pinyin_input_title: "ローマ字入力",
        pinyin_placeholder: "ローマ字を入力:",
        pinyin_clear_btn: "クリア (Esc)",
        pinyin_match_title: "一致する文字",
        pinyin_hint: "ローマ字を入力してフィルタリング (前方一致)",
        pinyin_no_match: "一致する文字が見つかりません",
        
        info_char: "文字",
        info_pinyin: "ローマ字",
        info_strokes: "筆画",
        info_none: "なし",

        load_error: "読み込みエラー",
        copy_empty: "コピーする文字がありません。",
        copy_error: "コピーエラー",
        copy_error_alert: "コピーに失敗しました。手動でコピーしてください。"
    }
};
let currentLang = 'zh'; 

function t(key) {
    if (translations[currentLang] && translations[currentLang][key]) {
        return translations[currentLang][key];
    }
    if (translations['en'] && translations['en'][key]) {
        return translations['en'][key];
    }
    return key;
}


function refreshDynamicText() {
    const infoDisplay = document.getElementById('info-display');
    if (infoDisplay && !infoDisplay.textContent.includes(':')) { 
        infoDisplay.textContent = t('info_default');
    }
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = t(key);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
        } else {
            el.textContent = text;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const text = t(key);
        if (text) el.placeholder = text;
    });

    document.title = t('title');
    const radicalLabel = document.getElementById('current-radical-name');
    const radicalCharContainer = document.getElementById('radical-char-buttons');
    
    if (radicalLabel && radicalCharContainer) {
        radicalLabel.textContent = t('radical_no_selection');
        delete radicalLabel.dataset.radicalId;
        radicalLabel.dataset.i18n = 'radical_no_selection';
        radicalCharContainer.innerHTML = `<p class="hint">${t('radical_empty')}</p>`;
    }

    refreshDynamicText();
}