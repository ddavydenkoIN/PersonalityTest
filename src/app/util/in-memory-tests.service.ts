import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Test, TestPreview, TestResult } from '../models/interfaces';

export class InMemoryTestsService implements InMemoryDbService {
  createDb() {
    const tests: Test[] = [
      {
        id: 1,
        name: 'Are you an introvert or an extrovert?',
        description: 'So do you consider yourself more of an introvert or an extrovert? Take this test, put together with input from psychoanalyst Sandrine Dury, and find out',
        questions: [{
          id: 7000,
          question: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
          options: [{
            label: 'Don’t dare to interrupt them',
            value: 1,
          }, {
            label: 'Listen, but with only with half an ear',
            value: 2
          }, {
            label: 'Interrupt and explain that you are really busy at the moment',
            value: 3
          }]
        },
          {
            id: 7001,
            question: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
            options: [{
              label: 'Look at your watch every two minutes',
              value: 1,
            }, {
              label: 'Bubble with inner anger, but keep quiet',
              value: 2,
            }, {
              label: 'Complain in a loud voice, while tapping your foot impatiently',
              value: 3,
            }]
          },
          {
            id: 7002,
            question: 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
            options: [{
              label: 'Don’t dare contradict them',
              value: 1,
            }, {
              label: 'Think that they are obviously right',
              value: 2
            }, {
              label: 'Defend your own point of view, tooth and nail',
              value: 3
            }, {
              label: 'Continuously interrupt your colleague',
              value: 4
            }]
          }
        ]
      },
    ];

    const testsPreview: TestPreview[] = tests.map((test: Test) => ({
        id: test.id,
        name: test.name,
        description: test.description
      })
    );

    const answers: TestResult[] = [
      {
        id: 1,
        overlapResult: 'Introvert',
        noOverlapResult: 'Extrovert',
        overlapDescription: 'In public and at work you are a ball of energy perpetually on the move. You take the initiative, encourage others, hate waiting and are endlessly anticipating what’s going on around you. You take real pleasure in managing everything, much like the conductor of an orchestra. You enjoy being noticed by your work peers and your anxiety is linked more to the thought of leaving others indifferent. You need other’s attention to fully exist, but once you’ve crossed the threshold of your home, it’s another matter. You no longer take initiatives, but leave others to decide in your place. When your partner asks you to make a choice or give an opinion about holiday destinations, dinner menus or the children’s activities, you offer little or no input. You’re not comfortable and don’t know how to react and those around you often interpret your passiveness as a lack of interest or a certain reticence. The reactions of those around you may make you feel the need to revise your behaviour to close the gap between the two poles of your life. People feel that you compensate in one area of life (public), which you have trouble handling on the other side (private). The public over-activity into which you throw yourself prevents you from expressing your emotions and feelings. At work, rationality and efficiency is asked of you, but even there, emotions and feelings are unavoidable. It’s not by denying or pushing them out of your attention that they cease to exist. Instead, by forcing them out of your conscious mind, they govern you unconsciously. Why are you so afraid of your emotions? What are you afraid of finding deep within yourself? This over-investment in public and professional life could well be, to a certain degree, running away from whatever it is that you don’t master or control. You’d win some inner serenity if you accepted to walk the road of self-knowledge.',
        noOverlapDescription: 'Whether at work or at home, you are a leader, the head of the pack. You are the type of person who is at ease with everyone — with the grocer, the doctor, a managing director or a waiter. You have an opinion about just about everything and you like to share your knowledge around, even imposing it on others if they haven’t asked for it. Your personal and professional entourages easily class you as a ‘loud mouth’, sure about yourself, not in the least bit bothered about what others think of you and someone who occasionally likes to play the card of provocation. When you’re on a roll, it’s hard to sop you and the least that could be said is that listening skills are not one of your innate skills. In the couples arena, you have maybe fallen for someone with a similar temperament – making for animated evenings! Or on the contrary, you live with a more introverted partner over whom you can, in some cases, have the upper hand. Your confidence and exuberance are a strong motor for your highly colourful life and you are a real antidote to any hint of grey skies or boredom. It’s perhaps the moments of excess activity or confidence that you need to question. Your capacity to be over the top can make others feel that you consider yourself as the most important person, that you have to be the centre of attention to feel loved and thus to exist, unless of course these are ways of pre-empting judgement from others. Do you worry about leaving others indifferent if you’re not perpetually ‘on show’? Maybe this need for attention is to compensate your own self-judgement? Your energy levels and enthusiasm are unquestionable, but are you as comfortable receiving as giving? Have you actually listened to anyone recently, without butting in? Do you know how to stay by yourself and do nothing else but be with yourself? A few questions that could be interesting to ask yourself…',
        answers: {
          7000: 1,
          7001: 1,
          7002: 2,
        }
      }
    ];

    return {tests, answers, testsPreview};
  }
}
