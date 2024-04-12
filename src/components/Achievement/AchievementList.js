import GDSCimage from '../../static/images/GDSC.webp';
import rootimage from '../../static/images/root_game.png';
import summerimage from '../../static/images/summer.jpg';
import ictaesimage from '../../static/images/ictaes.png';
import junctionximage from '../../static/images/junctionx.png';

const achievements = [
    {
        cateogry: 'SECURITY',
        title: 'GDSC Winter Cup 본선 진출',
        content:
            '조윤주, 조미서 학우가 GDSC Winter Cup 예선에서 우수한 성적으로 본선에 진출하였습니다. 모두 축하해주세요 !! ✨🎉🎊.',
        imageurl: GDSCimage,
        link: 'https://gdsc.community.dev/events/details/developer-student-clubs-chungang-university-presents-2023-gdsc-kr-winter-cup-final/',
    },
    {
        title: '"ROOT" 게임 출시 - SJR Teams',
        content:
            'PnP 학회 SJR Teams이 Steam에 신작 게임을 출시하였습니다. 많은 관심 부탁 드립니다. 😁😎',
        imageurl: rootimage,
        link: 'https://store.steampowered.com/app/2183360/ROOT/',
    },
    {
        title: '제 2회 HufsummerHackathon\n대상 수상',
        content:
            'PnP 소속 김지섭, 황병훈 학우가 제 2회 HufsummerHackathon에서 \'국밥과 깍두기\' 팀으로 대학생 커리어 앱을 개발해 대상을 수상하였습니다. 축하드립니다 🎉 😁',
        imageurl: summerimage,
        link: 'https://sites.google.com/view/hufsummer-hackathon/',
    },
    {
        title: 'National Conference on Advanced Engineering and ICT- Convergence\nBest paper Award 수상',
        content:
            'PnP AI 팀장을 맡고 있는 김대현 학우가 National Conference on Advanced Engineering and ICT- Convergence에서 양질의 논문으로 Best paper Award를 수상했습니다. 축하드립니다 🎉 😁',
        imageurl: ictaesimage,
        link: 'https://ictaes.org/',
    },
    {
        title: 'Junction X Seoul 2021 Microsoft Track 2nd Winner',
        content:
            '2021년 5월 21부터 23일까지 3일간 진행된 JunctionX Seoul 2021에 PnP 학회원 전승현, 이유림, 김시현님 외 1명이 IwaanaEatChicken팀으로 참여하여  Microsoft  Track에서 2등상을 수상했습니다. 수고하셨습니다. 수상 축하드립니다! 🎉',
        imageurl: junctionximage,
        link: 'http://kshieldjr.org/',
    },
    {},{},{}
];

export default achievements;
