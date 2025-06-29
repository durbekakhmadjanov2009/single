
const translations = {
    uz: {
        title: "CV tayyorlash – bir necha soniyada!",
        subtitle: "Hech qanday dizayn kerak emas – shunchaki to‘ldiring!",
        enterDetails: "Ma'lumotlarni Kiriting",
        successMessage: "CV muvaffaqiyatli yaratildi!",
        errorMessage: "Iltimos, barcha majburiy maydonlarni to'ldiring!",
        fullName: "To'liq Ism *",
        jobTitle: "Lavozim *",
        summary: "Qisqacha ma'lumot",
        photo: "Profil rasmi (ixtiyoriy)",
        next: "Keyingi",
        back: "Orqaga",
        position: "Avval ishlagan lavozimingiz *",
        company: "Korxona *",
        date: "Sana *",
        description: "Tavsif",
        add: "Qo'shish",
        degree: "Ta'lim darajasi *",
        institution: "O'quv muassasasi *",
        descriptionOptional: "Tavsif (ixtiyoriy)",
        skills: "Professional ko'nikmalar *",
        languages: "Biladigan tillar",
        beginner: "Boshlang'ich",
        intermediate: "O'rta",
        advanced: "Yuqori",
        expert: "Expert",
        native: "Ona tili",
        email: "Elektron pochta *",
        phone: "Telefon raqam *",
        address: "Manzil",
        templates: "Preset Dizaynlar",
        professional: "Professional",
        modern: "Modern",
        classic: "Classic",
        creative: "Creative",
        minimalist: "Minimalist",
        textSettings: "Matn Sozlamalari",
        fontType: "Shrift Turi",
        fontSize: "Shrift O'lchami (px)",
        fontColor: "Matn Rangi",
        backgroundSettings: "Fon Sozlamalari",
        backgroundColor: "Umumiy Fon",
        headerBackground: "Header Foni",
        preview: "Ko'rish",
        cvPreview: "CV Ko'rinishi",
        downloadPdf: "PDF Yuklab Olish",
        downloadJpg: "JPG Yuklab Olish",
        downloadPng: "PNG Yuklab Olish",
        experience: "Tajriba",
        education: "Ta'lim",
        contact: "Aloqa",
        errorModal: "Modal oynani ochishda xato yuz berdi!",
        errorLibrary: "PDF yoki rasm yaratish uchun kutubxonalar yuklanmadi!",
        errorStorage: "Ma'lumotlarni saqlashda xato yuz berdi!"
    },
    en: {
        title: "Create a CV – in just a few seconds!",
        subtitle: "No design skills needed – just fill it out!",
        enterDetails: "Enter Your Details",
        successMessage: "CV successfully created!",
        errorMessage: "Please fill out all required fields!",
        fullName: "Full Name *",
        jobTitle: "Job Title *",
        summary: "Summary",
        photo: "Profile Picture (optional)",
        next: "Next",
        back: "Back",
        position: "Previous Position *",
        company: "Company *",
        date: "Date *",
        description: "Description",
        add: "Add",
        degree: "Degree *",
        institution: "Institution *",
        descriptionOptional: "Description (optional)",
        skills: "Professional Skills *",
        languages: "Languages Known",
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
        expert: "Expert",
        native: "Native",
        email: "Email *",
        phone: "Phone Number *",
        address: "Address",
        templates: "Preset Templates",
        professional: "Professional",
        modern: "Modern",
        classic: "Classic",
        creative: "Creative",
        minimalist: "Minimalist",
        textSettings: "Text Settings",
        fontType: "Font Type",
        fontSize: "Font Size (px)",
        fontColor: "Text Color",
        backgroundSettings: "Background Settings",
        backgroundColor: "Background Color",
        headerBackground: "Header Background",
        preview: "Preview",
        cvPreview: "CV Preview",
        downloadPdf: "Download PDF",
        downloadJpg: "Download JPG",
        downloadPng: "Download PNG",
        experience: "Experience",
        education: "Education",
        contact: "Contact",
        errorModal: "Error opening the modal window!",
        errorLibrary: "Libraries for PDF or image creation failed to load!",
        errorStorage: "Error saving data!"
    },
    ru: {
        title: "Создайте резюме за несколько секунд!",
        subtitle: "Никаких навыков дизайна не требуется – просто заполните!",
        enterDetails: "Введите ваши данные",
        successMessage: "Резюме успешно создано!",
        errorMessage: "Пожалуйста, заполните все обязательные поля!",
        fullName: "Полное имя *",
        jobTitle: "Должность *",
        summary: "Краткая информация",
        photo: "Фотография профиля (необязательно)",
        next: "Далее",
        back: "Назад",
        position: "Предыдущая должность *",
        company: "Компания *",
        date: "Дата *",
        description: "Описание",
        add: "Добавить",
        degree: "Степень *",
        institution: "Учебное заведение *",
        descriptionOptional: "Описание (необязательно)",
        skills: "Профессиональные навыки *",
        languages: "Известные языки",
        beginner: "Начальный",
        intermediate: "Средний",
        advanced: "Продвинутый",
        expert: "Эксперт",
        native: "Родной",
        email: "Электронная почта *",
        phone: "Номер телефона *",
        address: "Адрес",
        templates: "Предустановленные шаблоны",
        professional: "Профессиональный",
        modern: "Современный",
        classic: "Классический",
        creative: "Креативный",
        minimalist: "Минималистичный",
        textSettings: "Настройки текста",
        fontType: "Тип шрифта",
        fontSize: "Размер шрифта (px)",
        fontColor: "Цвет текста",
        backgroundSettings: "Настройки фона",
        backgroundColor: "Цвет фона",
        headerBackground: "Фон заголовка",
        preview: "Предпросмотр",
        cvPreview: "Предпросмотр резюме",
        downloadPdf: "Скачать PDF",
        downloadJpg: "Скачать JPG",
        downloadPng: "Скачать PNG",
        experience: "Опыт",
        education: "Образование",
        contact: "Контакты",
        errorModal: "Ошибка при открытии модального окна!",
        errorLibrary: "Не удалось загрузить библиотеки для создания PDF или изображения!",
        errorStorage: "Ошибка при сохранении данных!"
    }
};

// Faylni yuklab olish uchun yordamchi funksiya
const triggerDownload = (dataUrl, fileName, type) => {
    try {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Fayl yuklab olishda xato:', error);
        alert(translations[currentLanguage].errorMessage);
    }
};

// Global o‘zgaruvchilar
let sectionOrder = ['summary', 'experience', 'education', 'contact', 'skills', 'languages'];
let customization = {
    fontFamily: 'Inter',
    fontSize: 12,
    fontColor: '#000000',
    bgColor: '#ffffff',
    headerBgColor: '#2563eb',
    template: 'professional'
};
let expCounter = 1;
let eduCounter = 1;
let skillCounter = 1;
let langCounter = 1;
let isDarkMode = false;
let currentLanguage = 'uz';

// Debounce funksiyasi: tez-tez chaqiriladigan funksiyalarni optimallashtirish
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

// Ma'lumotlarni localStorage'ga saqlash
const saveFormData = () => {
    try {
        const formData = {
            fullName: document.getElementById('fullName')?.value || '',
            jobTitle: document.getElementById('jobTitle')?.value || '',
            summary: document.getElementById('summary')?.value || '',
            photo: document.getElementById('cv-photo-preview')?.src || '',
            email: document.getElementById('contact-email')?.value || '',
            phone: document.getElementById('contact-phone')?.value || '',
            address: document.getElementById('contact-address')?.value || '',
            experiences: Array.from(document.querySelectorAll('.experience-item')).map(item => ({
                id: item.dataset.id,
                position: item.querySelector('.exp-position')?.value || '',
                company: item.querySelector('.exp-company')?.value || '',
                date: item.querySelector('.exp-date')?.value || '',
                description: item.querySelector('.exp-description')?.value || ''
            })),
            educations: Array.from(document.querySelectorAll('.education-item')).map(item => ({
                id: item.dataset.id,
                degree: item.querySelector('.edu-degree')?.value || '',
                institution: item.querySelector('.edu-institution')?.value || '',
                date: item.querySelector('.edu-date')?.value || '',
                description: item.querySelector('.edu-description')?.value || ''
            })),
            skills: Array.from(document.querySelectorAll('.skill-item')).map(item => ({
                id: item.dataset.id,
                name: item.querySelector('.skill-name')?.value || '',
                level: item.querySelector('.skill-level')?.value || 'beginner'
            })),
            languages: Array.from(document.querySelectorAll('.language-item')).map(item => ({
                id: item.dataset.id,
                name: item.querySelector('.lang-name')?.value || '',
                level: item.querySelector('.lang-level')?.value || 'beginner'
            })),
            sectionOrder,
            customization,
            isDarkMode,
            currentLanguage
        };
        localStorage.setItem('cvFormData', JSON.stringify(formData));
    } catch (error) {
        console.error('LocalStorage xatosi:', error);
        alert(translations[currentLanguage].errorStorage);
    }
};

// Ma'lumotlarni localStorage'dan yuklash
const loadFormData = () => {
    try {
        const formData = JSON.parse(localStorage.getItem('cvFormData'));
        if (!formData) {
            applyPreset('professional');
            saveFormData();
            updatePreview();
            return;
        }

        const fullName = document.getElementById('fullName');
        if (fullName) fullName.value = formData.fullName;

        const jobTitle = document.getElementById('jobTitle');
        if (jobTitle) jobTitle.value = formData.jobTitle;

        const summary = document.getElementById('summary');
        if (summary) summary.value = formData.summary;

        const cvPhotoPreview = document.getElementById('cv-photo-preview');
        if (formData.photo && cvPhotoPreview) {
            cvPhotoPreview.src = formData.photo;
            cvPhotoPreview.style.display = 'block';
            if (cvPhotoPreview.nextElementSibling) {
                cvPhotoPreview.nextElementSibling.style.display = 'none';
            }
        }

        const contactEmail = document.getElementById('contact-email');
        if (contactEmail) contactEmail.value = formData.email;

        const contactPhone = document.getElementById('contact-phone');
        if (contactPhone) contactPhone.value = formData.phone;

        const contactAddress = document.getElementById('contact-address');
        if (contactAddress) contactAddress.value = formData.address;

        const experienceFields = document.getElementById('experience-fields');
        if (experienceFields) {
            experienceFields.innerHTML = '';
            formData.experiences.forEach(exp => {
                const newExperience = document.createElement('div');
                newExperience.className = 'experience-item mb-4';
                newExperience.dataset.id = exp.id;
                newExperience.innerHTML = `
                    <div class="mb-3"><label class="form-label" data-i18n="position">${translations[currentLanguage].position}</label><input type="text" class="exp-position form-control" value="${exp.position}" placeholder="Masalan: Dasturchi" required></div>
                    <div class="mb-3"><label class="form-label" data-i18n="company">${translations[currentLanguage].company}</label><input type="text" class="exp-company form-control" value="${exp.company}" placeholder="Korxona nomi" required></div>
                    <div class="mb-3"><label class="form-label" data-i18n="date">${translations[currentLanguage].date}</label><input type="text" class="exp-date form-control" value="${exp.date}" placeholder="Masalan: 2020 - 2023" required></div>
                    <div class="mb-3"><label class="form-label" data-i18n="description">${translations[currentLanguage].description}</label><textarea class="exp-description form-control" placeholder="Ish tajribangiz haqida...">${exp.description}</textarea></div>
                    <button class="btn btn-danger btn-sm remove-experience"><i class="fas fa-times"></i></button>
                `;
                experienceFields.appendChild(newExperience);
                expCounter = Math.max(expCounter, parseInt(exp.id.split('-')[1]) + 1);
            });
        }

        const educationFields = document.getElementById('education-fields');
        if (educationFields) {
            educationFields.innerHTML = '';
            formData.educations.forEach(edu => {
                const newEducation = document.createElement('div');
                newEducation.className = 'education-item mb-4';
                newEducation.dataset.id = edu.id;
                newEducation.innerHTML = `
                    <div class="mb-3"><label class="form-label" data-i18n="degree">${translations[currentLanguage].degree}</label><input type="text" class="edu-degree form-control" value="${edu.degree}" placeholder="Masalan: Bakalavr" required></div>
                    <div class="mb-3"><label class="form-label" data-i18n="institution">${translations[currentLanguage].institution}</label><input type="text" class="edu-institution form-control" value="${edu.institution}" placeholder="Universitet nomi" required></div>
                    <div class="mb-3"><label class="form-label" data-i18n="date">${translations[currentLanguage].date}</label><input type="text" class="edu-date form-control" value="${edu.date}" placeholder="Masalan: 2016 - 2020" required></div>
                    <div class="mb-3"><label class="form-label" data-i18n="descriptionOptional">${translations[currentLanguage].descriptionOptional}</label><textarea class="edu-description form-control" placeholder="Qo'shimcha ma'lumotlar...">${edu.description}</textarea></div>
                    <button class="btn btn-danger btn-sm remove-education"><i class="fas fa-times"></i></button>
                `;
                educationFields.appendChild(newEducation);
                eduCounter = Math.max(eduCounter, parseInt(edu.id.split('-')[1]) + 1);
            });
        }

        const skillFields = document.getElementById('skill-fields');
        if (skillFields) {
            skillFields.innerHTML = '';
            formData.skills.forEach(skill => {
                const newSkill = document.createElement('div');
                newSkill.className = 'skill-item flex gap-3 mb-3 items-center';
                newSkill.dataset.id = skill.id;
                newSkill.innerHTML = `
                    <input type="text" class="skill-name form-control flex-1" value="${skill.name}" placeholder="Ko'nikma nomi" required>
                    <select class="skill-level form-select w-1/3">
                        <option value="beginner" ${skill.level === 'beginner' ? 'selected' : ''} data-i18n="beginner">${translations[currentLanguage].beginner}</option>
                        <option value="intermediate" ${skill.level === 'intermediate' ? 'selected' : ''} data-i18n="intermediate">${translations[currentLanguage].intermediate}</option>
                        <option value="advanced" ${skill.level === 'advanced' ? 'selected' : ''} data-i18n="advanced">${translations[currentLanguage].advanced}</option>
                        <option value="expert" ${skill.level === 'expert' ? 'selected' : ''} data-i18n="expert">${translations[currentLanguage].expert}</option>
                    </select>
                    <button class="btn btn-danger btn-sm remove-skill"><i class="fas fa-times"></i></button>
                `;
                skillFields.appendChild(newSkill);
                skillCounter = Math.max(skillCounter, parseInt(skill.id.split('-')[1]) + 1);
            });
        }

        const languageFields = document.getElementById('language-fields');
        if (languageFields) {
            languageFields.innerHTML = '';
            formData.languages.forEach(lang => {
                const newLanguage = document.createElement('div');
                newLanguage.className = 'language-item flex gap-3 mb-3 items-center';
                newLanguage.dataset.id = lang.id;
                newLanguage.innerHTML = `
                    <input type="text" class="lang-name form-control flex-1" value="${lang.name}" placeholder="Til nomi">
                    <select class="lang-level form-select w-1/3">
                        <option value="beginner" ${lang.level === 'beginner' ? 'selected' : ''} data-i18n="beginner">${translations[currentLanguage].beginner}</option>
                        <option value="intermediate" ${lang.level === 'intermediate' ? 'selected' : ''} data-i18n="intermediate">${translations[currentLanguage].intermediate}</option>
                        <option value="advanced" ${lang.level === 'advanced' ? 'selected' : ''} data-i18n="advanced">${translations[currentLanguage].advanced}</option>
                        <option value="native" ${lang.level === 'native' ? 'selected' : ''} data-i18n="native">${translations[currentLanguage].native}</option>
                    </select>
                    <button class="btn btn-danger btn-sm remove-language"><i class="fas fa-times"></i></button>
                `;
                languageFields.appendChild(newLanguage);
                langCounter = Math.max(langCounter, parseInt(lang.id.split('-')[1]) + 1);
            });
        }

        sectionOrder = formData.sectionOrder || sectionOrder;
        customization = formData.customization || customization;
        isDarkMode = formData.isDarkMode || false;
        currentLanguage = formData.currentLanguage || 'uz';

        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) languageSelect.value = currentLanguage;

        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            const toggleDarkMode = document.getElementById('toggleDarkMode');
            if (toggleDarkMode) toggleDarkMode.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.classList.remove('dark-mode');
            const toggleDarkMode = document.getElementById('toggleDarkMode');
            if (toggleDarkMode) toggleDarkMode.innerHTML = '<i class="fas fa-moon"></i>';
        }

        const fontFamily = document.getElementById('font-family');
        if (fontFamily) fontFamily.value = customization.fontFamily;

        const fontSize = document.getElementById('font-size');
        if (fontSize) fontSize.value = customization.fontSize;

        const fontColor = document.getElementById('font-color');
        if (fontColor) fontColor.value = customization.fontColor;

        const bgColor = document.getElementById('bg-color');
        if (bgColor) bgColor.value = customization.bgColor;

        const headerBgColor = document.getElementById('header-bg-color');
        if (headerBgColor) headerBgColor.value = customization.headerBgColor;

        applyCustomizations();
        updateSectionOrder();
        updatePreview();
        updateLanguage();
    } catch (error) {
        console.error('Ma\'lumotlarni yuklashda xato:', error);
        applyPreset('professional');
        saveFormData();
        updatePreview();
        alert(translations[currentLanguage].errorStorage);
    }
};

// Tilni yangilash: interfeysdagi matnlarni tarjima qilish
const updateLanguage = () => {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[currentLanguage][key] || element.textContent || '';
    });
    document.querySelectorAll('select option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        option.textContent = translations[currentLanguage][key] || option.textContent || '';
    });
    document.documentElement.lang = currentLanguage;
    saveFormData();
    updatePreview();
};

// CV ko‘rinishini yangilash
const updatePreview = () => {
    const fullName = document.getElementById('fullName')?.value.trim() || translations[currentLanguage].fullName.replace(' *', '');
    const jobTitle = document.getElementById('jobTitle')?.value.trim() || translations[currentLanguage].jobTitle.replace(' *', '');
    const summary = document.getElementById('summary')?.value.trim() || translations[currentLanguage].summary;
    const email = document.getElementById('contact-email')?.value.trim() || 'email@example.com';
    const phone = document.getElementById('contact-phone')?.value.trim() || '+998901234567';
    const address = document.getElementById('contact-address')?.value.trim() || translations[currentLanguage].address;

    const cvName = document.querySelector('.cv-name');
    if (cvName) cvName.textContent = fullName;

    const cvTitle = document.querySelector('.cv-title');
    if (cvTitle) cvTitle.textContent = jobTitle;

    const cvSummary = document.getElementById('cv-summary');
    if (cvSummary) cvSummary.textContent = summary;

    const cvEmail = document.getElementById('cv-email');
    if (cvEmail) cvEmail.textContent = email;

    const cvPhone = document.getElementById('cv-phone');
    if (cvPhone) cvPhone.textContent = phone;

    const cvAddress = document.getElementById('cv-address');
    if (cvAddress) cvAddress.textContent = address;

    const experienceItems = document.querySelectorAll('.experience-item');
    const cvExperience = document.getElementById('cv-experience');
    if (cvExperience) {
        cvExperience.innerHTML = '';
        if (experienceItems.length === 0) {
            cvExperience.innerHTML = `<p>${translations[currentLanguage].experience} haqida ma'lumot kiritilmagan</p>`;
        } else {
            experienceItems.forEach(item => {
                const position = item.querySelector('.exp-position')?.value.trim() || translations[currentLanguage].position.replace(' *', '');
                const company = item.querySelector('.exp-company')?.value.trim() || translations[currentLanguage].company.replace(' *', '');
                const date = item.querySelector('.exp-date')?.value.trim() || translations[currentLanguage].date.replace(' *', '');
                const description = item.querySelector('.exp-description')?.value.trim() || '';
                if (position || company || date) {
                    cvExperience.innerHTML += `
                        <div class="mb-3">
                            <div class="font-semibold">${position}</div>
                            <div class="text-gray-600">${company}</div>
                            <div class="text-blue-600 text-sm">${date}</div>
                            ${description ? `<p>${description}</p>` : ''}
                        </div>
                    `;
                }
            });
        }
    }

    const educationItems = document.querySelectorAll('.education-item');
    const cvEducation = document.getElementById('cv-education');
    if (cvEducation) {
        cvEducation.innerHTML = '';
        if (educationItems.length === 0) {
            cvEducation.innerHTML = `<p>${translations[currentLanguage].education} haqida ma'lumot kiritilmagan</p>`;
        } else {
            educationItems.forEach(item => {
                const degree = item.querySelector('.edu-degree')?.value.trim() || translations[currentLanguage].degree.replace(' *', '');
                const institution = item.querySelector('.edu-institution')?.value.trim() || translations[currentLanguage].institution.replace(' *', '');
                const date = item.querySelector('.edu-date')?.value.trim() || translations[currentLanguage].date.replace(' *', '');
                const description = item.querySelector('.edu-description')?.value.trim() || '';
                if (degree || institution || date) {
                    cvEducation.innerHTML += `
                        <div class="mb-3">
                            <div class="font-semibold">${degree}</div>
                            <div class="text-gray-600">${institution}</div>
                            <div class="text-blue-600 text-sm">${date}</div>
                            ${description ? `<p>${description}</p>` : ''}
                        </div>
                    `;
                }
            });
        }
    }

    const skillItems = document.querySelectorAll('.skill-item');
    const cvSkills = document.getElementById('cv-skills');
    if (cvSkills) {
        cvSkills.innerHTML = '';
        if (skillItems.length === 0) {
            cvSkills.innerHTML = `<p>${translations[currentLanguage].skills} haqida ma'lumot kiritilmagan</p>`;
        } else {
            skillItems.forEach(item => {
                const name = item.querySelector('.skill-name')?.value.trim();
                const level = item.querySelector('.skill-level')?.value || 'beginner';
                if (name) {
                    let levelPercent = 0;
                    switch (level) {
                        case 'beginner': levelPercent = 25; break;
                        case 'intermediate': levelPercent = 50; break;
                        case 'advanced': levelPercent = 75; break;
                        case 'expert': levelPercent = 100; break;
                    }
                    cvSkills.innerHTML += `
                        <div class="mb-3">
                            <div class="flex justify-between mb-1">
                                <span>${name}</span>
                                <span>${levelPercent}%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full h-2">
                                <div class="bg-blue-500 h-2 rounded-full" style="width: ${levelPercent}%"></div>
                            </div>
                        </div>
                    `;
                }
            });
        }
    }

    const languageItems = document.querySelectorAll('.language-item');
    const cvLanguages = document.getElementById('cv-languages');
    if (cvLanguages) {
        cvLanguages.innerHTML = '';
        if (languageItems.length === 0) {
            cvLanguages.innerHTML = `<p>${translations[currentLanguage].languages} haqida ma'lumot kiritilmagan</p>`;
        } else {
            languageItems.forEach(item => {
                const name = item.querySelector('.lang-name')?.value.trim();
                const level = item.querySelector('.lang-level')?.value;
                if (name) {
                    let levelText = translations[currentLanguage][level] || level;
                    cvLanguages.innerHTML += `
                        <div class="mb-2">
                            <span class="font-semibold">${name}</span>
                            <span class="text-gray-600"> ${levelText}</span>
                        </div>
                    `;
                }
            });
        }
    }
};

// Debounced yangilash funksiyasi
const debouncedUpdatePreview = debounce(updatePreview, 300);

// CV dizaynini sozlash
const applyCustomizations = () => {
    const cvPreview = document.getElementById('cv-preview');
    if (cvPreview) {
        cvPreview.className = `cv-template mx-auto ${customization.template}`;
        cvPreview.style.backgroundColor = customization.bgColor;
        cvPreview.style.fontFamily = customization.fontFamily;
        cvPreview.style.fontSize = `${customization.fontSize}px`;
        cvPreview.style.color = customization.fontColor;
    }

    const header = document.querySelector('.cv-header');
    if (header) {
        header.style.background = customization.headerBgColor;
        header.classList.remove('bg-blue-600', 'bg-gray-800', 'bg-gradient-to-r', 'from-purple-500', 'to-pink-600', 'bg-blue-900');
    }

    const body = document.querySelector('.cv-body');
    if (body) {
        body.style.backgroundColor = customization.bgColor;
    }

    const sectionTitles = document.querySelectorAll('.cv-section-title');
    sectionTitles.forEach(title => {
        title.style.color = customization.headerBgColor;
        title.style.borderBottomColor = customization.headerBgColor;
    });

    adjustCvScale();
};

// CV o‘lchamini ekranga moslashtirish
const adjustCvScale = () => {
    const cvPreview = document.getElementById('cv-preview');
    if (!cvPreview) return;
    const windowWidth = window.innerWidth;
    let scale = 0.9;
    if (windowWidth <= 768) {
        scale = 0.8;
    }
    if (windowWidth <= 480) {
        scale = 0.65;
    }
    cvPreview.style.transform = `scale(${scale})`;
    cvPreview.style.width = '100%';
    cvPreview.style.maxWidth = '595px';
};

// Preset dizaynlarni qo‘llash
const applyPreset = (preset) => {
    if (preset === 'professional') {
        customization = {
            fontFamily: 'Inter',
            fontSize: 12,
            fontColor: '#000000',
            bgColor: '#ffffff',
            headerBgColor: '#2563eb',
            template: 'professional'
        };
    } else if (preset === 'modern') {
        customization = {
            fontFamily: 'Roboto',
            fontSize: 11,
            fontColor: '#1f2937',
            bgColor: '#f1f5f9',
            headerBgColor: '#3b82f6',
            template: 'modern'
        };
    } else if (preset === 'classic') {
        customization = {
            fontFamily: 'Times New Roman',
            fontSize: 12,
            fontColor: '#000000',
            bgColor: '#ffffff',
            headerBgColor: '#1e3a8a',
            template: 'classic'
        };
    } else if (preset === 'creative') {
        customization = {
            fontFamily: 'Arial',
            fontSize: 13,
            fontColor: '#1f2937',
            bgColor: '#fefcbf',
            headerBgColor: '#ec4899',
            template: 'creative'
        };
    } else if (preset === 'minimalist') {
        customization = {
            fontFamily: 'Inter',
            fontSize: 11,
            fontColor: '#333333',
            bgColor: '#f9fafb',
            headerBgColor: '#6b7280',
            template: 'minimalist'
        };
    }

    const fontFamily = document.getElementById('font-family');
    if (fontFamily) fontFamily.value = customization.fontFamily;

    const fontSize = document.getElementById('font-size');
    if (fontSize) fontSize.value = customization.fontSize;

    const fontColor = document.getElementById('font-color');
    if (fontColor) fontColor.value = customization.fontColor;

    const bgColor = document.getElementById('bg-color');
    if (bgColor) bgColor.value = customization.bgColor;

    const headerBgColor = document.getElementById('header-bg-color');
    if (headerBgColor) headerBgColor.value = customization.headerBgColor;

    applyCustomizations();
    saveFormData();
    updatePreview();
};

// CV bo‘limlar tartibini yangilash
const updateSectionOrder = () => {
    const cvLeft = document.querySelector('.cv-left');
    const cvRight = document.querySelector('.cv-right');
    if (!cvLeft || !cvRight) return;

    const sectionElements = {};
    sectionOrder.forEach(section => {
        const sectionEl = document.querySelector(`[data-section="${section}"]`);
        if (sectionEl) {
            sectionElements[section] = sectionEl;
        }
    });

    cvLeft.innerHTML = '';
    cvRight.innerHTML = '';

    sectionOrder.forEach(section => {
        const sectionEl = sectionElements[section];
        if (sectionEl) {
            if (['summary', 'experience', 'education'].includes(section) && customization.template !== 'classic') {
                cvLeft.appendChild(sectionEl);
            } else {
                cvRight.appendChild(sectionEl);
            }
        }
    });

    debouncedUpdatePreview();
};

// CV ni yuklab olish (PDF, JPG, PNG)
const downloadCv = async (format) => {
    if (!validateAllFields()) {
        showErrorAlert();
        return;
    }

    const pdfLoader = document.getElementById('pdfLoader');
    if (pdfLoader) pdfLoader.style.display = 'block';

    const fullName = document.getElementById('fullName')?.value.trim() || 'CV';
    const cvPreview = document.getElementById('cv-preview');
    if (!cvPreview) {
        console.error('CV preview elementi topilmadi');
        alert(translations[currentLanguage].errorMessage);
        if (pdfLoader) pdfLoader.style.display = 'none';
        return;
    }

    const fileName = `${fullName.replace(/\s+/g, '_')}_CV`;

    try {
        if (!window.html2canvas || !window.jspdf) {
            throw new Error('html2canvas yoki jsPDF yuklanmagan');
        }

        const canvas = await window.html2canvas(cvPreview, {
            scale: 2,
            useCORS: true,
            backgroundColor: customization.bgColor
        });
        const imgData = canvas.toDataURL('image/png');

        if (format === 'pdf') {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${fileName}.pdf`);
        } else if (format === 'jpg') {
            triggerDownload(canvas.toDataURL('image/jpeg', 0.95), `${fileName}.jpg`, 'image/jpeg');
        } else if (format === 'png') {
            triggerDownload(imgData, `${fileName}.png`, 'image/png');
        }
    } catch (error) {
        console.error('Faylni yuklab olishda xato:', error);
        alert(translations[currentLanguage].errorLibrary);
    } finally {
        if (pdfLoader) pdfLoader.style.display = 'none';
    }
};

// Validatsiya funksiyalari
const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone) => {
    return /^\+998\d{9}$/.test(phone);
};

const validateDate = (date) => {
    return date.trim().length > 0;
};

const validateFields = (sectionId) => {
    let isValid = true;
    const section = document.getElementById(sectionId);
    if (!section) {
        console.warn(`Bo'lim topilmadi: ${sectionId}`);
        return false;
    }
    const inputs = section.querySelectorAll('[required]');
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-danger');
            isValid = false;
        } else {
            input.classList.remove('border-danger');
            if (input.id === 'contact-email' && !validateEmail(input.value)) {
                input.classList.add('border-danger');
                isValid = false;
            } else if (input.id === 'contact-phone' && !validatePhone(input.value)) {
                input.classList.add('border-danger');
                isValid = false;
            } else if (input.classList.contains('exp-date') && !validateDate(input.value)) {
                input.classList.add('border-danger');
                isValid = false;
            } else if (input.classList.contains('edu-date') && !validateDate(input.value)) {
                input.classList.add('border-danger');
                isValid = false;
            }
        }
    });
    return isValid;
};

const validateAllFields = () => {
    let isValid = true;
    ['basic-section', 'experience-section', 'education-section', 'skills-section'].forEach(sectionId => {
        if (!validateFields(sectionId)) {
            isValid = false;
        }
    });
    return isValid;
};

// Xato xabarini ko‘rsatish
const showErrorAlert = () => {
    const errorAlert = document.getElementById('errorAlert');
    if (errorAlert) {
        errorAlert.classList.remove('d-none');
        setTimeout(() => errorAlert.classList.add('d-none'), 3000);
    } else {
        console.warn('errorAlert elementi topilmadi');
        alert(translations[currentLanguage].errorMessage);
    }
};

// CV ni modal oynada ko‘rsatish
const showPreview = () => {
    if (!validateAllFields()) {
        showErrorAlert();
        return;
    }

    updatePreview();
    applyCustomizations();

    const modalElement = document.getElementById('cvPreviewModal');
    if (!modalElement) {
        console.error('cvPreviewModal elementi topilmadi');
        alert(translations[currentLanguage].errorModal);
        return;
    }

    try {
        if (!window.bootstrap) {
            throw new Error('Bootstrap yuklanmagan');
        }
        const modal = new window.bootstrap.Modal(modalElement, { backdrop: 'static', keyboard: true });
        modal.show();
    } catch (error) {
        console.error('Modal ochishda xato:', error);
        alert(translations[currentLanguage].errorModal);
    }
};

// Bo‘limlar o‘rtasida navigatsiya
const navigateToSection = (sectionId) => {
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.add('d-none');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('d-none');
    } else {
        console.warn(`Bo'lim topilmadi: ${sectionId}`);
    }
};

// Navigatsiya hodisalari
const setupNavigationListeners = () => {
    const nextToExperience = document.getElementById('nextToExperience');
    if (nextToExperience) {
        nextToExperience.addEventListener('click', () => {
            if (validateFields('basic-section')) {
                navigateToSection('experience-section');
            } else {
                showErrorAlert();
            }
        });
    } else {
        console.warn('nextToExperience tugmasi topilmadi');
    }

    const backToBasic = document.getElementById('backToBasic');
    if (backToBasic) {
        backToBasic.addEventListener('click', () => navigateToSection('basic-section'));
    }

    const nextToEducation = document.getElementById('nextToEducation');
    if (nextToEducation) {
        nextToEducation.addEventListener('click', () => {
            if (validateFields('experience-section')) {
                navigateToSection('education-section');
            } else {
                showErrorAlert();
            }
        });
    } else {
        console.warn('nextToEducation tugmasi topilmadi');
    }

    const backToExperience = document.getElementById('backToExperience');
    if (backToExperience) {
        backToExperience.addEventListener('click', () => navigateToSection('experience-section'));
    }

    const nextToSkills = document.getElementById('nextToSkills');
    if (nextToSkills) {
        nextToSkills.addEventListener('click', () => {
            if (validateFields('education-section')) {
                navigateToSection('skills-section');
            } else {
                showErrorAlert();
            }
        });
    } else {
        console.warn('nextToSkills tugmasi topilmadi');
    }

    const backToEducation = document.getElementById('backToEducation');
    if (backToEducation) {
        backToEducation.addEventListener('click', () => navigateToSection('education-section'));
    }

    const nextToCustomize = document.getElementById('nextToCustomize');
    if (nextToCustomize) {
        nextToCustomize.addEventListener('click', () => {
            if (validateFields('skills-section')) {
                navigateToSection('customize-section');
            } else {
                showErrorAlert();
            }
        });
    } else {
        console.warn('nextToCustomize tugmasi topilmadi');
    }

    const backToSkills = document.getElementById('backToSkills');
    if (backToSkills) {
        backToSkills.addEventListener('click', () => navigateToSection('skills-section'));
    }

    const previewCv = document.getElementById('previewCv');
    if (previewCv) {
        previewCv.addEventListener('click', showPreview);
    } else {
        console.warn('previewCv tugmasi topilmadi');
    }
};

// Dinamik maydonlar uchun hodisalar
const setupDynamicFieldListeners = () => {
    const addExperience = document.getElementById('add-experience');
    if (addExperience) {
        addExperience.addEventListener('click', () => {
            const experienceFields = document.getElementById('experience-fields');
            if (experienceFields) {
                const newExperience = document.createElement('div');
                newExperience.className = 'experience-item mb-4';
                newExperience.dataset.id = `exp-${expCounter++}`;
                newExperience.innerHTML = `
                    <div class="mb-3"><label class="form-label" data-i18n="position">${translations[currentLanguage].position}</label><input type="text" class="exp-position form-control" placeholder="Masalan: Dasturchi" required></div>
                    <div class="mb-3"><label class="form-label" data-i18n="company">${translations[currentLanguage].company}</label><input type="text" class="exp-company form-control" placeholder="Korxona nomi" required></div>
                    <div class="mb-3"><label class="form-label" data-i18n="date">${translations[currentLanguage].date}</label><input type="text" class="exp-date form-control" placeholder="Masalan: 2020 - 2023" required></div>
                    <div class="mb-3"><label class="form-label" data-i18n="description">${translations[currentLanguage].description}</label><textarea class="exp-description form-control" placeholder="Ish tajribangiz haqida..."></textarea></div>
                    <button class="btn btn-danger btn-sm remove-experience"><i class="fas fa-times"></i></button>
                `;
                experienceFields.appendChild(newExperience);
                newExperience.querySelectorAll('input, textarea').forEach(input => {
                    input.addEventListener('input', saveFormData);
                    input.addEventListener('input', debouncedUpdatePreview);
                });
                updateLanguage();
            }
        });
    }

    const addEducation = document.getElementById('add-education');
    if (addEducation) {
        addEducation.addEventListener('click', () => {
            const educationFields = document.getElementById('education-fields');
            if (educationFields) {
                const newEducation = document.createElement('div');
                newEducation.className = 'education-item mb-4';
                newEducation.dataset.id = `edu-${eduCounter++}`;
                newEducation.innerHTML = `
                    <div class="mb-3"><label class="form-label" data-i18n="degree">${translations[currentLanguage].degree}</label><input type="text" class="edu-degree form-control" placeholder="Masalan: Bakalavr" required></div>
                    <div class="mb-3"><label class="form-label" data-i18n="institution">${translations[currentLanguage].institution}</label><input type="text" class="edu-institution form-control" placeholder="Universitet nomi" required></div>
                    <div class="mb-3"><label class="form-label" data-i18n="date">${translations[currentLanguage].date}</label><input type="text" class="edu-date form-control" placeholder="Masalan: 2016 - 2020" required></div>
                    <div class="mb-3"><label class="form-label" data-i18n="descriptionOptional">${translations[currentLanguage].descriptionOptional}</label><textarea class="edu-description form-control" placeholder="Qo'shimcha ma'lumotlar..."></textarea></div>
                    <button class="btn btn-danger btn-sm remove-education"><i class="fas fa-times"></i></button>
                `;
                educationFields.appendChild(newEducation);
                newEducation.querySelectorAll('input, textarea').forEach(input => {
                    input.addEventListener('input', saveFormData);
                    input.addEventListener('input', debouncedUpdatePreview);
                });
                updateLanguage();
            }
        });
    }

    const addSkill = document.getElementById('add-skill');
    if (addSkill) {
        addSkill.addEventListener('click', () => {
            const skillFields = document.getElementById('skill-fields');
            if (skillFields) {
                const newSkill = document.createElement('div');
                newSkill.className = 'skill-item flex gap-3 mb-3 items-center';
                newSkill.dataset.id = `skill-${skillCounter++}`;
                newSkill.innerHTML = `
                    <input type="text" class="skill-name form-control flex-1" placeholder="Ko'nikma nomi" required>
                    <select class="skill-level form-select w-1/3">
                        <option value="beginner" data-i18n="beginner">${translations[currentLanguage].beginner}</option>
                        <option value="intermediate" data-i18n="intermediate">${translations[currentLanguage].intermediate}</option>
                        <option value="advanced" data-i18n="advanced">${translations[currentLanguage].advanced}</option>
                        <option value="expert" data-i18n="expert">${translations[currentLanguage].expert}</option>
                    </select>
                    <button class="btn btn-danger btn-sm remove-skill"><i class="fas fa-times"></i></button>
                `;
                skillFields.appendChild(newSkill);
                newSkill.querySelectorAll('input, select').forEach(input => {
                    input.addEventListener('input', saveFormData);
                    input.addEventListener('input', debouncedUpdatePreview);
                });
                updateLanguage();
            }
        });
    }

    const addLanguage = document.getElementById('add-language');
    if (addLanguage) {
        addLanguage.addEventListener('click', () => {
            const languageFields = document.getElementById('language-fields');
            if (languageFields) {
                const newLanguage = document.createElement('div');
                newLanguage.className = 'language-item flex gap-3 mb-3 items-center';
                newLanguage.dataset.id = `lang-${langCounter++}`;
                newLanguage.innerHTML = `
                    <input type="text" class="lang-name form-control flex-1" placeholder="Til nomi">
                    <select class="lang-level form-select w-1/3">
                        <option value="beginner" data-i18n="beginner">${translations[currentLanguage].beginner}</option>
                        <option value="intermediate" data-i18n="intermediate">${translations[currentLanguage].intermediate}</option>
                        <option value="advanced" data-i18n="advanced">${translations[currentLanguage].advanced}</option>
                        <option value="native" data-i18n="native">${translations[currentLanguage].native}</option>
                    </select>
                    <button class="btn btn-danger btn-sm remove-language"><i class="fas fa-times"></i></button>
                `;
                languageFields.appendChild(newLanguage);
                newLanguage.querySelectorAll('input, select').forEach(input => {
                    input.addEventListener('input', saveFormData);
                    input.addEventListener('input', debouncedUpdatePreview);
                });
                updateLanguage();
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-experience')) {
            e.target.closest('.experience-item')?.remove();
            saveFormData();
            debouncedUpdatePreview();
        } else if (e.target.classList.contains('remove-education')) {
            e.target.closest('.education-item')?.remove();
            saveFormData();
            debouncedUpdatePreview();
        } else if (e.target.classList.contains('remove-skill')) {
            e.target.closest('.skill-item')?.remove();
            saveFormData();
            debouncedUpdatePreview();
        } else if (e.target.classList.contains('remove-language')) {
            e.target.closest('.language-item')?.remove();
            saveFormData();
            debouncedUpdatePreview();
        }
    });
};

// Dizayn sozlamalari uchun hodisalar
const setupCustomizationListeners = () => {
    const fontFamily = document.getElementById('font-family');
    if (fontFamily) {
        fontFamily.addEventListener('change', (e) => {
            customization.fontFamily = e.target.value;
            applyCustomizations();
            saveFormData();
        });
    }

    const fontSize = document.getElementById('font-size');
    if (fontSize) {
        fontSize.addEventListener('input', (e) => {
            customization.fontSize = parseInt(e.target.value) || 12;
            applyCustomizations();
            saveFormData();
        });
    }

    const fontColor = document.getElementById('font-color');
    if (fontColor) {
        fontColor.addEventListener('input', (e) => {
            customization.fontColor = e.target.value;
            applyCustomizations();
            saveFormData();
        });
    }

    const bgColor = document.getElementById('bg-color');
    if (bgColor) {
        bgColor.addEventListener('input', (e) => {
            customization.bgColor = e.target.value;
            applyCustomizations();
            saveFormData();
        });
    }

    const headerBgColor = document.getElementById('header-bg-color');
    if (headerBgColor) {
        headerBgColor.addEventListener('input', (e) => {
            customization.headerBgColor = e.target.value;
            applyCustomizations();
            saveFormData();
        });
    }

    document.querySelectorAll('.preset-option').forEach(option => {
        option.addEventListener('click', () => {
            applyPreset(option.dataset.preset);
        });
    });
};

// Boshqa boshqaruv elementlari uchun hodisalar
const setupOtherListeners = () => {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            currentLanguage = e.target.value;
            updateLanguage();
            saveFormData();
        });
    }

    const toggleDarkMode = document.getElementById('toggleDarkMode');
    if (toggleDarkMode) {
        toggleDarkMode.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            document.body.classList.toggle('dark-mode', isDarkMode);
            toggleDarkMode.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            saveFormData();
        });
    }

    const photoInput = document.getElementById('photo');
    if (photoInput) {
        photoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const cvPhotoPreview = document.getElementById('cv-photo-preview');
                    if (cvPhotoPreview) {
                        cvPhotoPreview.src = event.target.result;
                        cvPhotoPreview.style.display = 'block';
                        if (cvPhotoPreview.nextElementSibling) {
                            cvPhotoPreview.nextElementSibling.style.display = 'none';
                        }
                        saveFormData();
                    }
                };
                reader.readAsDataURL(file);
            } else {
                alert('Faqat JPG yoki PNG formatdagi rasmlar qabul qilinadi!');
            }
        });
    }

    const downloadPdfModal = document.getElementById('downloadPdfModal');
    if (downloadPdfModal) {
        downloadPdfModal.addEventListener('click', () => downloadCv('pdf'));
    }

    const downloadJpgModal = document.getElementById('downloadJpgModal');
    if (downloadJpgModal) {
        downloadJpgModal.addEventListener('click', () => downloadCv('jpg'));
    }

    const downloadPngModal = document.getElementById('downloadPngModal');
    if (downloadPngModal) {
        downloadPngModal.addEventListener('click', () => downloadCv('png'));
    }
};

// Ilovani ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
    loadFormData();
    setupNavigationListeners();
    setupDynamicFieldListeners();
    setupCustomizationListeners();
    setupOtherListeners();

    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('input', saveFormData);
        input.addEventListener('input', debouncedUpdatePreview);
    });

    window.addEventListener('resize', adjustCvScale);
});
