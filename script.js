// Complete 40 Authentic Short & Powerful Hadith Data
const hadiths = [
    { id: 1, source: "Bukhari", arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ.", urdu: "اعمال کا دارومدار نیتوں پر ہے۔", english: "Actions are judged by intentions." },
    { id: 2, source: "Muslim", arabic: "الدِّينُ النِّصِيحَةُ.", urdu: "دین خیر خواہی کا نام ہے۔", english: "Religion is sincerity and well-wishing." },
    { id: 3, source: "Bukhari", arabic: "لاَ يَدْخُلُ الْجَنَّةَ قَاطِعٌ.", urdu: "رشتہ داریاں توڑنے والا جنت میں نہیں جائے گا۔", english: "The one who severs ties of kinship will not enter Paradise." },
    { id: 4, source: "Tirmidhi", arabic: "الدَّالُّ عَلَى الْخَيْرِ كَفَاعِلِهِ.", urdu: "نیکی کی راہ دکھانے والے کو نیکی کرنے والے جتنا ثواب ملتا ہے۔", english: "The one who guides to good is like the one who does it." },
    { id: 5, source: "Bukhari", arabic: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ.", urdu: "تم میں سے کوئی مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کیلئے وہ پسند نہ کرے جو اپنے لئے کرتا ہے۔", english: "None of you truly believes until he loves for his brother what he loves for himself." },
    { id: 6, source: "Bukhari", arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ.", urdu: "جو اللہ اور آخرت پر ایمان رکھتا ہے اسے چاہئے کہ اچھی بات کہے یا خاموش رہے۔", english: "Whoever believes in Allah and the Last Day should speak good or remain silent." },
    { id: 7, source: "Muslim", arabic: "الطُّهُورُ شَطْرُ الإِيمَانِ.", urdu: "پاکیزگی ایمان کا نصف حصہ ہے۔", english: "Purity is half of faith." },
    { id: 8, source: "Tirmidhi", arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ.", urdu: "تم جہاں کہیں bhi ہو اللہ سے ڈرو۔", english: "Fear Allah wherever you are." },
    { id: 9, source: "Bukhari", arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ.", urdu: "سچا مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں۔", english: "A true Muslim is one from whose tongue and hand other Muslims are safe." },
    { id: 10, source: "Muslim", arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ.", urdu: "جو کسی مومن کی دنیاوی تکلیف دور کرے گا، اللہ قیامت کے دن اس کی تکلیف دور فرمائے گا۔", english: "Whoever relieves a believer of a worldly distress, Allah will relieve him of a distress on the Day of Resurrection." },
    { id: 11, source: "Bukhari", arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ.", urdu: "تم میں سے بہترین شخص وہ ہے جو قرآن سیکھے اور دوسروں کو سکھائے۔", english: "The best among you are those who learn the Quran and teach it." },
    { id: 12, source: "Tirmidhi", arabic: "خِيَارُكُمْ خِيَارُكُمْ لِنِسَائِهِمْ.", urdu: "تم میں سے بہترین وہ ہیں جو اپنی عورتوں (بیویوں) کے لیے بہترین ہیں۔", english: "The best of you are those who are best to their wives." },
    { id: 13, source: "Ibn Majah", arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ.", urdu: "علم حاصل کرنا ہر مسلمان پر فرض ہے۔", english: "Seeking knowledge is an obligation upon every Muslim." },
    { id: 14, source: "Bukhari", arabic: "كُلُّ مَعْرُوفٍ صَدَقَةٌ.", urdu: "ہر نیکی کا کام صدقہ ہے۔", english: "Every good deed is a charity." },
    { id: 15, source: "Bukhari", arabic: "يَسِّرُوا وَلاَ تُعَسِّرُوا.", urdu: "آسانیاں پیدا کرو اور تنگی میں نہ ڈالو۔", english: "Make things easy and do not make them difficult." },
    { id: 16, source: "Tirmidhi", arabic: "مَنْ لَمْ يَشْكُرِ النَّاسَ لَمْ يَشْکُرِ اللَّهَ.", urdu: "جو لوگوں کا شکر گزار نہیں ہوتا، وہ اللہ کا بھی شکر ادا نہیں کرتا۔", english: "He who does not thank people does not thank Allah." },
    { id: 17, source: "Bukhari", arabic: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ.", urdu: "پاکیزہ اور اچھی بات کہنا بھی صدقہ ہے۔", english: "A good word is charity." },
    { id: 18, source: "Muslim", arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ.", urdu: "جو شخص علم کی تلاش میں کسی راستے پر چلے گا، اللہ اس کیلئے جنت کا راستہ آسان کر دے گا۔", english: "Whoever follows a path in pursuit of knowledge, Allah will make easy for him a path to Paradise." },
    { id: 19, source: "Bukhari", arabic: "الظُّلْمُ ظُلُمَاتٌ يَوْمَ الْقِيَامَةِ.", urdu: "ظلم قیامت کے دن اندھیروں کا سبب بنے گا۔", english: "Oppression will be a darkness on the Day of Resurrection." },
    { id: 20, source: "Tirmidhi", arabic: "الْحَيَاءُ مِنَ الإِيمَانِ.", urdu: "حیا ایمان کا حصہ ہے۔", english: "Modesty is part of faith." },
    { id: 21, source: "Bukhari", arabic: "لاَ تَغْضَبْ.", urdu: "غصہ نہ کیا کرو۔", english: "Do not become angry." },
    { id: 22, source: "Muslim", arabic: "مَنْ بَاعَ ثَمِينًا فَلَيْسَ مِنَّا.", urdu: "جس نے ملاوٹ کی (دھوکہ دیا) وہ ہم میں سے نہیں ہے۔", english: "He who cheats is not of us." },
    { id: 23, source: "Tirmidhi", arabic: "الصَّلاَةُ نُورٌ.", urdu: "نماز ایک روشن نور ہے۔", english: "Prayer is light." },
    { id: 24, source: "Bukhari", arabic: "السَّاعِي عَلَى الأَرْمَلَةِ وَالْمِسْكِينِ كَالْمُجَاهِدِ فِي سَبِيلِ اللَّهِ.", urdu: "بیوہ اور مسکین کی مدد کرنے والا اللہ کی راہ میں جہاد کرنے والے کی طرح ہے۔", english: "The one who looks after a widow or a poor person is like a Mujahid in the cause of Allah." },
    { id: 25, source: "Muslim", arabic: "مَنْ صَلَّى عَلَىَّ وَاحِدَةً صَلَّى اللَّهُ عَلَيْهِ عَشْرًا.", urdu: "جو مجھ پر ایک بار درود بھیجے گا، اللہ اس پر دس رحمتیں نازل فرمائے گا۔", english: "Whoever sends blessings upon me once, Allah will send blessings upon him ten times." },
    { id: 26, source: "Bukhari", arabic: "بَلِّغُوا عَنِّى وَلَوْ آيَةً.", urdu: "میری طرف سے (لوگوں کو باتیں) پہنچاؤ خواہ ایک ہی آیت ہو۔", english: "Convey from me even if it is just one verse." },
    { id: 27, source: "Tirmidhi", arabic: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ.", urdu: "اپنے بھائی کے سامنے تمہارا مسکرانا بھی تمہارے لیے صدقہ ہے۔", english: "Your smiling in the face of your brother is charity for you." },
    { id: 28, source: "Muslim", arabic: "لاَ يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ.", urdu: "وہ شخص جنت میں داخل نہیں ہوگا جس کے دل میں رائی کے دانے برابر بھی غرور ہوگا۔", english: "He who has a grain of pride in his heart will not enter Paradise." },
    { id: 29, source: "Bukhari", arabic: "أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ هَكَذَا.", urdu: "میں اور یتیم کی کفالت کرنے والا جنت میں اس طرح (پاس پاس) ہوں گے۔", english: "I and the person who looks after an orphan will be in Paradise like this (close together)." },
    { id: 30, source: "Tirmidhi", arabic: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ.", urdu: "بیشک اللہ خوبصورت ہے اور خوبصورتی کو پسند کرتا ہے۔", english: "Verily, Allah is Beautiful and He loves beauty." },
    { id: 31, source: "Muslim", arabic: "أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ.", urdu: "اللہ کے ہاں سب سے پسندیدہ عمل وہ ہے جو مستقل کیا جائے خواہ وہ تھوڑا ہی ہو۔", english: "The most beloved of deeds to Allah are those that are most consistent, even if small." },
    { id: 32, source: "Bukhari", arabic: "الْمَرْءُ مَعَ مَنْ أَحَبَّ.", urdu: "انسان کا حشر (قیامت میں) اسی کے ساتھ ہوگا جس سے وہ محبت کرتا ہے۔", english: "A person will be with those whom he loves." },
    { id: 33, source: "Tirmidhi", arabic: "خِيَارُكُمْ أَحَاسِنُكُمْ أَخْلاَقًا.", urdu: "تم میں سے بہترین وہ ہے جس کے اخلاق سب سے اچھے ہوں۔", english: "The best of you are those who are best in character." },
    { id: 34, source: "Bukhari", arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ.", urdu: "طاقتور وہ نہیں جو کسی کو پچھاڑ دے، بلکہ اصل طاقتور وہ ہے جو غصے کے وقت خود پر قابو رکھے۔", english: "The strong is not the one who overcomes people by his strength, but the one who controls himself while in anger." },
    { id: 35, source: "Muslim", arabic: "بَدَأَ الإِسْلاَمُ غَرِيبًا وَسَيَعُودُ كَمَا بَدَأَ غَرِيبًا.", urdu: "اسلام کا آغاز مسافرانہ حالت میں ہوا تھا اور عنقریب وہ پھر اسی حالت پر لوٹ آئے گا۔", english: "Islam began as something strange and will return to being strange as it began." },
    { id: 36, source: "Tirmidhi", arabic: "الدُّعَاءُ هُوَ الْعِبَادَةُ.", urdu: "دعا ہی اصل عبادت ہے۔", english: "Supplication (Dua) is the essence of worship." },
    { id: 37, source: "Bukhari", arabic: "عَيْنَانِ لاَ تَمَسُّهُمَا النَّارُ عَيْنٌ بَكَتْ مِنْ خَشْيَةِ اللَّهِ وَعَيْنٌ بَاتَتْ تَحْرُسُ فِي سَبِيلِ اللَّهِ.", urdu: "دو آنکھوں کو جہنم کی آگ نہیں چھوئے گی: ایک وہ جو اللہ کے خوف سے رو پڑی، اور دوسری وہ جس نے اللہ کی راہ میں پہرہ دیتے ہوئے رات گزاری۔", english: "Two eyes will not be touched by the Fire: an eye that wept from the fear of Allah, and an eye that spent the night guarding in the cause of Allah." },
    { id: 38, source: "Muslim", arabic: "مَنْ سَبَّحَ اللَّهَ فِي دُبُرِ كُلِّ صَلاَةٍ ثَلاَثًا وَثَلاَثِينَ.", urdu: "جس نے ہر نماز کے بعد 33 مرتبہ سبحان اللہ کہا (اس کے گناہ معاف کر دیے جاتے ہیں)۔", english: "Whoever glorifies Allah (says Subhanallah) 33 times after every prayer (will be forgiven)." },
    { id: 39, source: "Bukhari", arabic: "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ.", urdu: "اللہ جس کے ساتھ بھلائی کا ارادہ فرماتا ہے، اسے دین کی گہری سمجھ عطا کر دیتا ہے۔", english: "Whomever Allah wants good for, He grants him understanding of the religion." },
    { id: 40, source: "Muslim", arabic: "اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ.", urdu: "جہنم کی آگ سے بچو خواہ کھجور کا ایک ٹکڑا صدقہ کر کے ہی کیوں نہ ہو۔", english: "Protect yourselves from the Fire, even if by giving half a date in charity." }
];

// Initialize App when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('hadith-container');
    const themeToggle = document.getElementById('theme-toggle');
    const modeText = document.querySelector('.mode-text');

    // 1. Inject all 40 Hadiths dynamically
        // 1. Inject all 40 Hadiths dynamically
    function loadApp() {
        if (!container) return;
        container.innerHTML = '';
        hadiths.forEach(h => {
            const card = document.createElement('div');
            card.className = 'hadith-card';
            card.innerHTML = `
                <div class="hadith-meta">
                    <span class="hadith-number">Hadith ${h.id}</span>
                    <span class="hadith-source">Source: ${h.source}</span>
                </div>
                <p class="arabic">${h.arabic}</p>
                <div class="translation-section">
                    <div class="lang-block">
                        <div class="lang-label">Urdu Translation</div>
                        <p class="urdu">${h.urdu}</p>
                    </div>
                    <div class="lang-block">
                        <div class="lang-label">English Translation</div>
                        <p class="english">${h.english}</p>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // 2. Load and Apply saved theme configuration
    const savedTheme = localStorage.getItem('islamic-app-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (modeText) {
        modeText.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }

    // 3. Ultra-smooth Theme Swapper Event
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('islamic-app-theme', targetTheme);
            
            if (modeText) {
                modeText.textContent = targetTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
            }
        });
    }

    // Run the app generator
    loadApp();
});

