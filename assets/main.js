var app = new Vue ({
    el : '#root',
    data : {
        logo : 'graphic/theme_eduprime_logo.png',
        examinationIcon : 'graphic/Exam-Illustration.png',
        intStudents : 'graphic/Girl-Illustration.png',
        userMail : '',
        mailList : [],
        navbarMenu : [
            'home',
            'courses',
            'about us',
            'news',
            'pages',
            'contact',
            'purchase',
        ],
        faculties : [
            {
                img : '',
                name : '',
                card : '',
                info : '',
            },
            {
                img : 'graphic/gavel-v2.png',
                name : 'law faculty',
                card : 'graphic/Gavel-Illustration-e1556884768193.png',
                info : 'Learning from world-leading academics and practitioners, you’ll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.',
            },
            {
                img : 'graphic/Coins-tabs-v2.png',
                name : 'economy',
                card : 'graphic/Economy.png',
                info : 'Economics focuses on the behaviour and interactions of economic agents and how economies work. Microeconomics analyzes basic elements in the economy, including individual agents and markets, their interactions, and the outcomes of interactions, including unemployment of resource.',
            },
            {
                img : 'graphic/Medicine-tabs-v2.png',
                name : 'medicine',
                card : 'graphic/Medicine.png',
                info : 'Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness.',
            },
            {
                img : 'graphic/Computer-tabs-v2.png',
                name : 'computer science',
                card : 'graphic/Computer-Science.png',
                info : 'Computer science is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information. A computer scientist studies the theory of computation software systems.',
            },
            {
                img : 'graphic/Palette-tabs-v2.png',
                name : 'graphic design',
                card : 'graphic/Graphic-Design.png',
                info : 'Computer science is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information. A computer scientist studies the theory of computation software systems.',
            },
            {
                img : '',
                name : '',
                card : '',
                info : '',
            },

        ],
        latestCourses : [
            {
                name : 'make better decision',
                icon : 'graphic/Decisions-icon.png',
                teacher : 'james colins',
                price : '$ 21,00',
            },
            {
                name : 'how to be a speaker',
                icon : 'graphic/Speaker-icon.png',
                teacher : 'james colins',
                price : 'free',
            },
            {
                name : 'network introduction',
                icon : 'graphic/Network-icon.png',
                teacher : 'james colins',
                price : 'free',
            },
            {
                name : 'brand management',
                icon : 'graphic/Brand-icon.png',
                teacher : 'james colins',
                price : 'free',
            },
        ],
        partnersLogos : [
            'graphic/partner-2.png',
            'graphic/partner-3.png',
            'graphic/partner-4.png',
            'graphic/partner-5.png',
            'graphic/partner-6.png',
            'graphic/partner-8.png',
            'graphic/partner-1.png',
            'graphic/partner-7.png',
        ],
        getEP : [
            'request a website',
            'browse themes',
            'payment options',
            'support system',
            'checkout',
            'purchase theme',
        ],
        netWorking : [
            'purchase theme',
            'our benefits',
            'our team',
            'our services',
            'other products',
            'my account',
        ],

    },
    methods : {
        changeFacultyCard () {

        },
        subscription () {
            this.mailList.push(this.userMail);
            console.log(this.mailList);
            this.userMail = '';
        },
    },
});
