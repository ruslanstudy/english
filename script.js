const translations = {
    en: {
        rebuses: {
            puzzles: [
                { question: "What value does this image represent?", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80", options: ["Trust", "Kindness", "Communication", "Respect"], correct: 0, explanation: "Trust is shown through close collaboration and reliance on each other." },
                { question: "What friendship quality is shown here?", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80", options: ["Honesty", "Teamwork", "Support", "Respect"], correct: 1, explanation: "Teamwork shows friends collaborating and supporting each other." },
                { question: "Which value is depicted?", image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80", options: ["Friendship", "Kindness", "Communication", "Trust"], correct: 0, explanation: "Friendship is shown through the connection and joy between people." },
                { question: "What does this image symbolize?", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80", options: ["Support", "Kindness", "Honesty", "Respect"], correct: 1, explanation: "Kindness is demonstrated through helping hands and caring gestures." },
                { question: "Which concept is illustrated?", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80", options: ["Communication", "Trust", "Honesty", "Support"], correct: 0, explanation: "Communication is shown through conversation and active listening." },
                { question: "What value is represented?", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", options: ["Honesty", "Respect", "Kindness", "Trust"], correct: 0, explanation: "Honesty is shown through open, sincere interaction." },
                { question: "Which friendship principle is shown?", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80", options: ["Respect", "Support", "Communication", "Kindness"], correct: 0, explanation: "Respect is demonstrated through mutual understanding." },
                { question: "What does this image convey?", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80", options: ["Mutual Support", "Teamwork", "Friendship", "Trust"], correct: 0, explanation: "Mutual support shows people lifting each other up." }
            ]
        },
        quiz: {
            questions: [
                { question: "What is the most important foundation of a strong friendship?", options: ["Having the same hobbies", "Trust and mutual respect", "Living near each other", "Going to the same school"], correct: 1, explanation: "Trust and mutual respect form the foundation of lasting friendships." },
                { question: "When a friend shares a secret, what should you do?", options: ["Tell others if it's interesting", "Keep it confidential", "Share only with your best friend", "Post on social media"], correct: 1, explanation: "Keeping confidences is essential for trust." },
                { question: "How should you handle a disagreement?", options: ["Avoid them until they apologize", "Listen and express feelings calmly", "Insist you're right", "Get others to take your side"], correct: 1, explanation: "Healthy conflict resolution involves listening and expressing feelings respectfully." },
                { question: "What does active listening mean?", options: ["Waiting for your turn to speak", "Focusing completely on what they say", "Nodding while thinking of something else", "Interrupting with your own story"], correct: 1, explanation: "Active listening means giving full attention before responding." },
                { question: "Why is honesty important?", options: ["It's not always important", "It builds credibility and prevents misunderstandings", "Only for serious matters", "Friends should always agree"], correct: 1, explanation: "Honesty creates trust and authenticity." },
                { question: "How can you support a friend going through a hard time?", options: ["Tell them to get over it", "Be present, listen, offer help", "Avoid them", "Only help if asked directly"], correct: 1, explanation: "Support means being there while respecting their autonomy." },
                { question: "What should you do if you break a promise?", options: ["Make an excuse", "Apologize sincerely and make it right", "Blame circumstances", "Promise to do better without changing"], correct: 1, explanation: "Sincere apologies and changed behavior rebuild trust." }
            ]
        },
        discussion: {
            scenarios: [
                { title: "The Forgotten Promise", text: "You promised to help a friend study but forgot and made other plans. They're upset.", choices: { a: { text: "Apologize sincerely and reschedule", correct: true, feedback: "Excellent! This shows you value the friendship and take responsibility." }, b: { text: "Say they're overreacting", correct: false, feedback: "This dismisses their feelings and damages trust." }, c: { text: "Make an excuse and avoid them", correct: false, feedback: "Avoiding the issue prevents resolution." } } },
                { title: "The Hurtful Joke", text: "Your friend joked about you in front of others. It really hurt.", choices: { a: { text: "Tell them privately how it felt", correct: true, feedback: "Perfect! Honest communication without embarrassment." }, b: { text: "Joke back about them", correct: false, feedback: "This escalates conflict and creates a cycle of hurt." }, c: { text: "Pretend it didn't matter", correct: false, feedback: "Suppressing feelings leads to resentment." } } },
                { title: "The Trusted Secret", text: "A friend shared something personal in confidence. Another friend is curious.", choices: { a: { text: "Decline politely — it's private", correct: true, feedback: "Excellent! This shows loyalty and respect for privacy." }, b: { text: "Share but ask them not to tell", correct: false, feedback: "This breaks the confidence placed in you." }, c: { text: "Change the subject awkwardly", correct: false, feedback: "Directly declining shows more respect and clarity." } } },
                { title: "The Quiet Friend", text: "Your friend seems down but says 'I'm fine'. You know they're not.", choices: { a: { text: "Express concern gently, offer to listen", correct: true, feedback: "Great! Shows care while respecting boundaries." }, b: { text: "Demand they tell you now", correct: false, feedback: "Pressuring someone can make them withdraw further." }, c: { text: "Leave them alone completely", correct: false, feedback: "Completely withdrawing shows lack of care." } } }
            ],
            questions: [
                "What makes someone a trustworthy friend?",
                "Can a friendship become stronger after a disagreement?",
                "Why is honesty important even when it's difficult?",
                "How can we support a friend who feels lonely?",
                "Why should friends respect differences?",
                "What's the difference between a good friend and a best friend?",
                "How do you know if a friendship is healthy?",
                "Why is it important to apologize when you've hurt a friend?"
            ]
        },
        quotes: {
            items: [
                { text: "A real friend is one who walks in when the rest of the world walks out.", author: "Walter Winchell" },
                { text: "True friendship comes when the silence between two people is comfortable.", author: "David Tyson" },
                { text: "Friendship is born at that moment when one person says to another: 'What! You too? I thought I was the only one.'", author: "C.S. Lewis" },
                { text: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
                { text: "The greatest gift of life is friendship, and I have received it.", author: "Hubert H. Humphrey" },
                { text: "A strong friendship doesn't need daily conversation. As long as the relationship lives in the heart, true friends never part.", author: "Unknown" }
            ]
        }
    },
    ru: {
        rebuses: {
            puzzles: [
                { question: "Какую ценность представляет это изображение?", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80", options: ["Доверие", "Доброта", "Общение", "Уважение"], correct: 0, explanation: "Доверие показано через тесное сотрудничество и взаимную опору." },
                { question: "Какое качество дружбы показано здесь?", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80", options: ["Честность", "Командная работа", "Поддержка", "Уважение"], correct: 1, explanation: "Командная работа показывает друзей, сотрудничающих и поддерживающих друг друга." },
                { question: "Какая ценность изображена?", image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80", options: ["Дружба", "Доброта", "Общение", "Доверие"], correct: 0, explanation: "Дружба показана через связь и радость между людьми." },
                { question: "Что символизирует это изображение?", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80", options: ["Поддержка", "Доброта", "Честность", "Уважение"], correct: 1, explanation: "Доброта демонстрируется через помогающие руки и заботливые жесты." },
                { question: "Какая концепция проиллюстрирована?", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80", options: ["Общение", "Доверие", "Честность", "Поддержка"], correct: 0, explanation: "Общение показано через разговор и активное слушание." },
                { question: "Какая ценность представлена?", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", options: ["Честность", "Уважение", "Доброта", "Доверие"], correct: 0, explanation: "Честность показана через открытое, искреннее взаимодействие." },
                { question: "Какой принцип дружбы показан?", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80", options: ["Уважение", "Поддержка", "Общение", "Доброта"], correct: 0, explanation: "Уважение демонстрируется через взаимопонимание." },
                { question: "Что передаёт это изображение?", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80", options: ["Взаимная поддержка", "Командная работа", "Дружба", "Доверие"], correct: 0, explanation: "Взаимная поддержка показывает людей, поднимающих друг друга." }
            ]
        },
        quiz: {
            questions: [
                { question: "Что является наиболее важной основой крепкой дружбы?", options: ["Одинаковые хобби", "Доверие и взаимное уважение", "Жить рядом", "Учиться в одной школе"], correct: 1, explanation: "Доверие и взаимное уважение формируют основу прочной дружбы." },
                { question: "Когда друг делится секретом, что вы должны сделать?", options: ["Рассказать другим, если интересно", "Сохранить конфиденциальность", "Поделиться только с лучшим другом", "Опубликовать в соцсетях"], correct: 1, explanation: "Сохранение доверенного необходимо для доверия." },
                { question: "Как справляться с разногласиями?", options: ["Избегать, пока не извинятся", "Выслушать и спокойно выразить чувства", "Настаивать на своей правоте", "Привлечь других на свою сторону"], correct: 1, explanation: "Здоровое разрешение конфликтов включает слушание и уважительное выражение чувств." },
                { question: "Что означает активное слушание?", options: ["Ждать своей очереди говорить", "Полностью сосредоточиться на словах друга", "Кивать, думая о другом", "Перебивать своей историей"], correct: 1, explanation: "Активное слушание означает полное внимание перед ответом." },
                { question: "Почему важна честность?", options: ["Не всегда важна", "Создаёт доверие и предотвращает недопонимания", "Только для серьёзных вопросов", "Друзья должны всегда соглашаться"], correct: 1, explanation: "Честность создаёт доверие и подлинность." },
                { question: "Как поддержать друга в трудное время?", options: ["Сказать справиться самому", "Быть рядом, слушать, предлагать помощь", "Избегать его", "Помогать только по прямой просьбе"], correct: 1, explanation: "Поддержка означает быть рядом, уважая автономию." },
                { question: "Что делать, если нарушили обещание?", options: ["Придумать оправдание", "Искренне извиниться и исправить", "Обвинить обстоятельства", "Пообещать лучше, не меняя поведения"], correct: 1, explanation: "Искренние извинения и изменённое поведение восстанавливают доверие." }
            ]
        },
        discussion: {
            scenarios: [
                { title: "Забытое обещание", text: "Вы обещали помочь другу с учёбой, но забыли и построили другие планы. Он расстроен.", choices: { a: { text: "Искренне извиниться и перенести", correct: true, feedback: "Отлично! Это показывает, что вы цените дружбу и берёте ответственность." }, b: { text: "Сказать, что он преувеличивает", correct: false, feedback: "Это обесценивает его чувства и подрывает доверие." }, c: { text: "Придумать оправдание и избегать", correct: false, feedback: "Избегание проблемы препятствует разрешению." } } },
                { title: "Обидная шутка", text: "Ваш друг пошутил о вас при других. Это действительно задело.", choices: { a: { text: "Сказать наедине, как это было", correct: true, feedback: "Отлично! Честное общение без смущения." }, b: { text: "Пошутить в ответ о нём", correct: false, feedback: "Это усугубляет конфликт и создаёт цикл обид." }, c: { text: "Делать вид, что не важно", correct: false, feedback: "Подавление чувств ведёт к обиде." } } },
                { title: "Доверенный секрет", text: "Друг поделился личным в доверии. Другой друг любопытствует.", choices: { a: { text: "Вежливо отказаться — это личное", correct: true, feedback: "Отлично! Это показывает лояльность и уважение к приватности." }, b: { text: "Поделиться, но попросить молчать", correct: false, feedback: "Это нарушает доверие, которое друг вам оказал." }, c: { text: "Неловко сменить тему", correct: false, feedback: "Прямой отказ показывает больше уважения и ясности." } } },
                { title: "Молчаливый друг", text: "Ваш друг выглядит подавленным, но говорит 'Я в порядке'. Вы знаете, что это не так.", choices: { a: { text: "Мягко выразить беспокойство, предложить выслушать", correct: true, feedback: "Отлично! Показывает заботу, уважая границы." }, b: { text: "Потребовать рассказать сейчас", correct: false, feedback: "Давление может заставить его закрыться ещё больше." }, c: { text: "Полностью оставить в покое", correct: false, feedback: "Полное отстранение показывает отсутствие заботы." } } }
            ],
            questions: [
                "Что делает человека надёжным другом?",
                "Может ли дружба стать крепче после разногласий?",
                "Почему честность важна, даже когда это трудно?",
                "Как поддержать друга, который чувствует себя одиноким?",
                "Почему друзья должны уважать различия?",
                "В чём разница между хорошим и лучшим другом?",
                "Как узнать, здорова ли дружба?",
                "Почему важно извиняться, когда вы обидели друга?"
            ]
        },
        quotes: {
            items: [
                { text: "Настоящий друг — это тот, кто входит, когда остальной мир выходит.", author: "Уолтер Винчелл" },
                { text: "Истинная дружба приходит, когда молчание между двумя людьми комфортно.", author: "Дэвид Тайсон" },
                { text: "Дружба рождается в тот момент, когда один человек говорит другому: 'Что! Ты тоже? Я думал, я один такой.'", author: "К.С. Льюис" },
                { text: "Друг — это тот, кто знает всё о вас и всё равно любит вас.", author: "Элберт Хаббард" },
                { text: "Величайший дар жизни — это дружба, и я получил его.", author: "Хьюберт Х. Хамфри" },
                { text: "Крепкая дружба не нуждается в ежедневных разговорах. Пока отношения живут в сердце, настоящие друзья никогда не расстаются.", author: "Неизвестно" }
            ]
        }
    }
};

let currentLang = localStorage.getItem('bff-lang') || 'en';
let currentRebus = 0, rebusScore = 0, rebusAnswered = false, selectedRebus = null;
let currentQuiz = 0, quizScore = 0, quizAnswered = false, selectedQuiz = null;
let currentQuote = 0, lastRandomQuestion = -1;

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initParallax();
    initReveal();
    initBento();
    initTilt();
    initMagnetic();
    initRebus();
    initQuiz();
    initScenarios();
    initRandomQuestion();
    initQuotes();
    initLangSwitcher();
    initBackToTop();
    updateLanguage();
});

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        updateActiveNav();
    });
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
        });
    });
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    const pos = window.scrollY + 150;
    sections.forEach(sec => {
        if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
            links.forEach(l => {
                l.classList.toggle('active', l.getAttribute('href') === `#${sec.id}`);
            });
        }
    });
}

function initParallax() {
    const img = document.querySelector('[data-parallax]');
    if (!img) return;
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
            img.style.transform = `translateY(${y * 0.3}px) scale(1.1)`;
        }
    }, { passive: true });
}

function initReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

function initBento() {
    document.querySelectorAll('.bento-item').forEach(item => {
        item.addEventListener('mousemove', e => {
            const rect = item.getBoundingClientRect();
            item.style.setProperty('--mx', `${e.clientX - rect.left}px`);
            item.style.setProperty('--my', `${e.clientY - rect.top}px`);
        });
        item.addEventListener('click', () => {
            const wasActive = item.classList.contains('active');
            document.querySelectorAll('.bento-item').forEach(i => i.classList.remove('active'));
            if (!wasActive) item.classList.add('active');
        });
        item.setAttribute('tabindex', '0');
        item.addEventListener('keypress', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
        });
    });
}

function initTilt() {
    if (window.matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('[data-tilt]').forEach(el => {
        el.addEventListener('mousemove', e => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rx = ((y - cy) / cy) * -8;
            const ry = ((x - cx) / cx) * 8;
            el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });
}

function initMagnetic() {
    if (window.matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('.magnetic').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
}

function initRebus() {
    const t = translations[currentLang].rebuses.puzzles;
    document.getElementById('rebusTotal').textContent = t.length;
    document.getElementById('rebusMaxScore').textContent = t.length;
    displayRebus(0);
    document.getElementById('checkRebusBtn').addEventListener('click', checkRebus);
    document.getElementById('nextRebusBtn').addEventListener('click', nextRebus);
    document.getElementById('restartRebusBtn').addEventListener('click', restartRebus);
}

function displayRebus(i) {
    const p = translations[currentLang].rebuses.puzzles[i];
    document.getElementById('rebusCurrent').textContent = i + 1;
    document.getElementById('rebusImage').src = p.image;
    document.getElementById('rebusQuestion').textContent = p.question;
    const opts = document.getElementById('rebusOptions');
    opts.innerHTML = '';
    p.options.forEach((o, idx) => {
        const b = document.createElement('button');
        b.className = 'option-btn';
        b.textContent = o;
        b.addEventListener('click', () => selectRebus(idx, b));
        opts.appendChild(b);
    });
    document.getElementById('rebusFeedback').className = 'game-feedback';
    document.getElementById('checkRebusBtn').classList.remove('hidden');
    document.getElementById('nextRebusBtn').classList.add('hidden');
    rebusAnswered = false; selectedRebus = null;
    updateRebusProgress();
}

function selectRebus(i, b) {
    if (rebusAnswered) return;
    document.querySelectorAll('#rebusOptions .option-btn').forEach(x => x.classList.remove('selected'));
    b.classList.add('selected'); selectedRebus = i;
}

function checkRebus() {
    if (selectedRebus === null || rebusAnswered) return;
    const p = translations[currentLang].rebuses.puzzles[currentRebus];
    const fb = document.getElementById('rebusFeedback');
    rebusAnswered = true;
    const ok = selectedRebus === p.correct;
    if (ok && !document.getElementById(`rb${currentRebus}`)) {
        rebusScore++;
        document.getElementById('rebusScore').textContent = rebusScore;
        const m = document.createElement('div'); m.id = `rb${currentRebus}`; m.style.display = 'none';
        document.body.appendChild(m);
    }
    fb.className = `game-feedback show ${ok ? 'correct' : 'incorrect'}`;
    fb.textContent = (ok ? '✓ ' : '✗ ') + p.explanation;
    document.querySelectorAll('#rebusOptions .option-btn').forEach((b, i) => {
        if (i === p.correct) b.classList.add('correct');
        else if (i === selectedRebus && !ok) b.classList.add('incorrect');
        b.disabled = true;
    });
    document.getElementById('checkRebusBtn').classList.add('hidden');
    document.getElementById('nextRebusBtn').classList.remove('hidden');
    updateRebusProgress();
}

function nextRebus() {
    const t = translations[currentLang].rebuses.puzzles;
    currentRebus++;
    if (currentRebus >= t.length) showRebusResults();
    else displayRebus(currentRebus);
}

function showRebusResults() {
    const t = translations[currentLang].rebuses.puzzles;
    const card = document.getElementById('rebusCard');
    const msg = rebusScore === t.length ? (currentLang === 'en' ? 'Perfect!' : 'Идеально!') :
                rebusScore >= t.length / 2 ? (currentLang === 'en' ? 'Good job!' : 'Хорошая работа!') :
                (currentLang === 'en' ? 'Keep practicing!' : 'Продолжайте практиковаться!');
    card.innerHTML = `
        <h3 style="font-family:var(--serif);font-size:2rem;margin-bottom:1.5rem;text-align:center;">${currentLang === 'en' ? 'Complete!' : 'Завершено!'}</h3>
        <p style="text-align:center;font-size:4rem;font-family:var(--serif);color:var(--terra);margin:2rem 0;">${rebusScore}/${t.length}</p>
        <p style="text-align:center;font-size:1.125rem;">${msg}</p>
    `;
    document.querySelector('#rebuses .game-header').classList.add('hidden');
    document.getElementById('restartRebusBtn').classList.remove('hidden');
}

function restartRebus() {
    currentRebus = 0; rebusScore = 0;
    document.querySelectorAll('[id^="rb"]').forEach(e => e.remove());
    document.getElementById('rebusScore').textContent = '0';
    document.querySelector('#rebuses .game-header').classList.remove('hidden');
    document.getElementById('restartRebusBtn').classList.add('hidden');
    const card = document.getElementById('rebusCard');
    card.innerHTML = `
        <div class="rebus-visual"><img id="rebusImage" src="" alt="Rebus"></div>
        <h3 class="rebus-question" id="rebusQuestion"></h3>
        <div class="rebus-options" id="rebusOptions"></div>
        <div class="game-feedback" id="rebusFeedback"></div>
        <div class="game-controls">
            <button class="btn btn-outline magnetic" id="checkRebusBtn">${currentLang === 'en' ? 'Check Answer' : 'Проверить'}</button>
            <button class="btn magnetic hidden" id="nextRebusBtn">${currentLang === 'en' ? 'Next →' : 'Далее →'}</button>
        </div>
    `;
    initRebus();
}

function updateRebusProgress() {
    const t = translations[currentLang].rebuses.puzzles;
    const p = ((currentRebus + (rebusAnswered ? 1 : 0)) / t.length) * 100;
    document.getElementById('rebusProgress').style.width = `${p}%`;
}

function initQuiz() {
    const t = translations[currentLang].quiz.questions;
    document.getElementById('quizTotal').textContent = t.length;
    document.getElementById('quizMaxScore').textContent = t.length;
    displayQuiz(0);
    document.getElementById('checkQuizBtn').addEventListener('click', checkQuiz);
    document.getElementById('nextQuizBtn').addEventListener('click', nextQuiz);
    document.getElementById('restartQuizBtn').addEventListener('click', restartQuiz);
}

function displayQuiz(i) {
    const q = translations[currentLang].quiz.questions[i];
    document.getElementById('quizCurrent').textContent = i + 1;
    document.getElementById('quizQuestion').textContent = q.question;
    const opts = document.getElementById('quizOptions');
    opts.innerHTML = '';
    q.options.forEach((o, idx) => {
        const b = document.createElement('button');
        b.className = 'option-btn';
        b.textContent = o;
        b.addEventListener('click', () => selectQuiz(idx, b));
        opts.appendChild(b);
    });
    document.getElementById('quizFeedback').className = 'game-feedback';
    document.getElementById('checkQuizBtn').classList.remove('hidden');
    document.getElementById('nextQuizBtn').classList.add('hidden');
    quizAnswered = false; selectedQuiz = null;
    updateQuizProgress();
}

function selectQuiz(i, b) {
    if (quizAnswered) return;
    document.querySelectorAll('#quizOptions .option-btn').forEach(x => x.classList.remove('selected'));
    b.classList.add('selected'); selectedQuiz = i;
}

function checkQuiz() {
    if (selectedQuiz === null || quizAnswered) return;
    const q = translations[currentLang].quiz.questions[currentQuiz];
    const fb = document.getElementById('quizFeedback');
    quizAnswered = true;
    const ok = selectedQuiz === q.correct;
    if (ok && !document.getElementById(`qz${currentQuiz}`)) {
        quizScore++;
        document.getElementById('quizScore').textContent = quizScore;
        const m = document.createElement('div'); m.id = `qz${currentQuiz}`; m.style.display = 'none';
        document.body.appendChild(m);
    }
    fb.className = `game-feedback show ${ok ? 'correct' : 'incorrect'}`;
    fb.textContent = (ok ? '✓ ' : '✗ ') + q.explanation;
    document.querySelectorAll('#quizOptions .option-btn').forEach((b, i) => {
        if (i === q.correct) b.classList.add('correct');
        else if (i === selectedQuiz && !ok) b.classList.add('incorrect');
        b.disabled = true;
    });
    document.getElementById('checkQuizBtn').classList.add('hidden');
    document.getElementById('nextQuizBtn').classList.remove('hidden');
    updateQuizProgress();
}

function nextQuiz() {
    const t = translations[currentLang].quiz.questions;
    currentQuiz++;
    if (currentQuiz >= t.length) showQuizResults();
    else displayQuiz(currentQuiz);
}

function showQuizResults() {
    const t = translations[currentLang].quiz.questions;
    const pct = (quizScore / t.length) * 100;
    const msg = pct === 100 ? (currentLang === 'en' ? 'Perfect score!' : 'Идеальный результат!') :
                pct >= 70 ? (currentLang === 'en' ? 'Great job!' : 'Отличная работа!') :
                pct >= 50 ? (currentLang === 'en' ? 'Good effort!' : 'Хорошая попытка!') :
                (currentLang === 'en' ? 'Keep learning!' : 'Продолжайте учиться!');
    const card = document.getElementById('quizCard');
    card.innerHTML = `
        <h3 style="font-family:var(--serif);font-size:2rem;margin-bottom:1.5rem;text-align:center;">${currentLang === 'en' ? 'Complete!' : 'Завершено!'}</h3>
        <p style="text-align:center;font-size:4rem;font-family:var(--serif);color:var(--terra);margin:2rem 0;">${quizScore}/${t.length}</p>
        <p style="text-align:center;font-size:1.125rem;">${msg}</p>
    `;
    document.querySelector('#quiz .game-header').classList.add('hidden');
    document.getElementById('restartQuizBtn').classList.remove('hidden');
}

function restartQuiz() {
    currentQuiz = 0; quizScore = 0;
    document.querySelectorAll('[id^="qz"]').forEach(e => e.remove());
    document.getElementById('quizScore').textContent = '0';
    document.querySelector('#quiz .game-header').classList.remove('hidden');
    document.getElementById('restartQuizBtn').classList.add('hidden');
    const card = document.getElementById('quizCard');
    card.innerHTML = `
        <h3 class="quiz-question" id="quizQuestion"></h3>
        <div class="quiz-options" id="quizOptions"></div>
        <div class="game-feedback" id="quizFeedback"></div>
        <div class="game-controls">
            <button class="btn btn-outline light magnetic" id="checkQuizBtn">${currentLang === 'en' ? 'Check Answer' : 'Проверить'}</button>
            <button class="btn magnetic hidden" id="nextQuizBtn">${currentLang === 'en' ? 'Next →' : 'Далее →'}</button>
        </div>
    `;
    initQuiz();
}

function updateQuizProgress() {
    const t = translations[currentLang].quiz.questions;
    const p = ((currentQuiz + (quizAnswered ? 1 : 0)) / t.length) * 100;
    document.getElementById('quizProgress').style.width = `${p}%`;
}

function initScenarios() {
    document.querySelectorAll('.scenario').forEach(sc => {
        const idx = Array.from(document.querySelectorAll('.scenario')).indexOf(sc);
        const btns = sc.querySelectorAll('.scenario-btn');
        const fb = sc.querySelector('.scenario-feedback');
        btns.forEach(b => {
            b.addEventListener('click', () => {
                const c = b.dataset.choice;
                const data = translations[currentLang].discussion.scenarios[idx].choices[c];
                btns.forEach(x => { x.disabled = true; x.style.opacity = '0.5'; });
                b.style.opacity = '1';
                b.style.background = data.correct ? '#4CAF50' : '#ff9800';
                b.style.color = 'white';
                fb.className = `scenario-feedback show ${data.correct ? 'correct' : 'incorrect'}`;
                fb.textContent = data.feedback;
            });
        });
    });
}

function initRandomQuestion() {
    document.getElementById('randomQuestionBtn').addEventListener('click', showRandom);
    showRandom();
}

function showRandom() {
    const qs = translations[currentLang].discussion.questions;
    let n;
    do { n = Math.floor(Math.random() * qs.length); } while (n === lastRandomQuestion && qs.length > 1);
    lastRandomQuestion = n;
    const el = document.getElementById('randomQuestion');
    el.style.opacity = '0';
    setTimeout(() => {
        el.textContent = qs[n];
        el.style.opacity = '1';
    }, 200);
}

function initQuotes() {
    displayQuote(0);
    document.getElementById('nextQuoteBtn').addEventListener('click', () => {
        const t = translations[currentLang].quotes.items;
        currentQuote = (currentQuote + 1) % t.length;
        displayQuote(currentQuote);
    });
    document.getElementById('copyQuoteBtn').addEventListener('click', copyQuote);
}

function displayQuote(i) {
    const q = translations[currentLang].quotes.items[i];
    const el = document.getElementById('quoteText');
    el.style.opacity = '0';
    setTimeout(() => {
        el.textContent = q.text;
        document.getElementById('quoteAuthor').textContent = '— ' + q.author;
        el.style.opacity = '1';
    }, 200);
}

async function copyQuote() {
    const text = `${document.getElementById('quoteText').textContent} — ${document.getElementById('quoteAuthor').textContent}`;
    const fb = document.getElementById('copyFeedback');
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); document.body.removeChild(ta);
    }
    fb.classList.add('show');
    setTimeout(() => fb.classList.remove('show'), 2000);
}

function initLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(b => {
        if (b.dataset.lang === currentLang) b.classList.add('active');
        else b.classList.remove('active');
        b.addEventListener('click', () => {
            currentLang = b.dataset.lang;
            localStorage.setItem('bff-lang', currentLang);
            document.querySelectorAll('.lang-btn').forEach(x => x.classList.toggle('active', x.dataset.lang === currentLang));
            updateLanguage();
        });
    });
}

function updateLanguage() {
    document.querySelectorAll('[data-en][data-ru]').forEach(el => {
        el.textContent = el.dataset[currentLang];
    });
    if (document.getElementById('rebusQuestion')) displayRebus(currentRebus);
    if (document.getElementById('quizQuestion')) displayQuiz(currentQuiz);
    displayQuote(currentQuote);
    initScenarios();
    showRandom();
}

function initBackToTop() {
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}