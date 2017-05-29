tabs[1]=[126,132,133,139,140,143,144,147,151,152]
tabs[2]=[127,128,129,134,135,136,141,145,148,153]
tabs[3]=[130,131,137,138,142,146,149,150,154,155]
tabs[1].name=['Combat','Skills','']
tabs[2].name=['Combat','Masteries','']
tabs[3].name=['Warcries','','']
tabs.close=[3,1,3]
desc=[]
desc[126]=['Bash',
'powerful blow that increases the damage done<br>to enemies and knocks them back',
function(){return ''+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec((15+lvl(126)*5+blvl(144)*5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec((50+(lvl(126)-1)*5)+blvl(139)*5,0)),' percent<br>',])
+'<span class="num">4: </span>'+cc(['Damage: +',lvl(126),'<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((2<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Bash Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Stun: +5% Damage per Level<br>'
+'<span class="num">63: </span>'+'Concentrate: +5% Attack Rating per Level<br>'
},1,2]
desc[127]=['Sword Mastery',
'passive - improves sword fighting skill',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec((28+(lvl(127)-1)*5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec((28+(lvl(127)-1)*8),0)),' percent<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(127),0,25))+' Percent Chance of Critical Strike<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[128]=['Axe Mastery',
'passive - improves axe fighting skill',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec((28+(lvl(128)-1)*5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec((28+(lvl(128)-1)*8),0)),' percent<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(128),0,25))+' Percent Chance of Critical Strike<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,2]
desc[129]=['Mace Mastery',
'passive - improves mace fighting skill',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec((28+(lvl(129)-1)*5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec((28+(lvl(129)-1)*8),0)),' percent<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(129),0,25))+' Percent Chance of Critical Strike<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[130]=['Howl',
'sends nearby monsters<br>scrambling away in fear',
function(){return ''+'<span class="num">19: </span>'+'Enemy runs up to '+dec(dec((24+(lvl(130)-1)*5),0)*2/3,1)+' yards<br>'
+'<span class="num">12: </span>'+cc(['Enemy runs for ',dec(((75+(lvl(130)-1)*25))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((4<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,1]
desc[131]=['Find Potion',
'use on the corpse of a slain monster<br>for a chance to find a potion',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(131),0,100),0)+' percent chance<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((2<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},1,3]
desc[132]=['Leap',
'leaps away from danger<br>or into the fray',
function(){return ''+'<span class="num">19: </span>'+'Radius: '+dec(dec(dm(lvl(132),4,30),0)*2/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((2<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[133]=['Double Swing',
'when two weapons are equipped<br>attacks two targets if possible,<br>or one target twice',
function(){return ''+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec((15+(lvl(133)-1)*5),0)),' percent<br>',])
+'<span class="num">5: </span>'+'Mana Cost: '+dec(max((8+(lvl(133)-1)*-1)<<5,0)/128,0)+'<br>'
},
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(blvl(126)*10,0)),' percent<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Double Swing Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Bash: +10% Damage per Level<br>'
},2,3]
desc[134]=['Pole Arm Mastery',
'passive - improves pole arm skill',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec((28+(lvl(134)-1)*5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec((30+(lvl(134)-1)*8),0)),' percent<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(134),0,25))+' Percent Chance of Critical Strike<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[135]=['Throwing Mastery',
'passive - improves thrown weapon skill',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec((28+(lvl(135)-1)*5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec((30+(lvl(135)-1)*8),0)),' percent<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(135),0,25))+' Percent Chance of Critical Strike<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,2]
desc[136]=['Spear Mastery',
'passive - improves spear fighting skill',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec((28+(lvl(136)-1)*5),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec((30+(lvl(136)-1)*8),0)),' percent<br>',])
+'<span class="num">51: </span>'+''+(dm(lvl(136),0,25))+' Percent Chance of Critical Strike<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,3]
desc[137]=['Taunt',
'enrages a monster into relentlessly attacking',
function(){return ''+'<span class="num">3: </span>'+'Target\'s Damage: '+dec((-5+(lvl(137)-1)*-2),0)+' percent<br>'
+'<span class="num">3: </span>'+'Target\'s Attack: '+dec((-5+(lvl(137)-1)*-2),0)+' percent<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((3<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},2,1]
desc[138]=['Shout',
'warns of impending danger and improves the defense<br>rating of you and your party',
function(){return ''+'<span class="num">2: </span>'+cc(['Defense: ',sign(dec((100+(lvl(138)-1)*10),0)),' percent<br>',])
+'<span class="num">12: </span>'+cc(['Duration: ',dec(((500+(lvl(138)-1)*250)+(blvl(149)+blvl(155))*125)/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((6<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Shout Receives Bonuses From:<br>'
+'</span>'+'<span class="num">67: </span>'+'Battle Orders: +'+dec(125/25,0)+' Seconds per Level<br>'
+'<span class="num">67: </span>'+'Battle Command: +'+dec(125/25,0)+' Seconds per Level<br>'
},2,2]
desc[139]=['Stun',
'stuns your target for a short time<br>and increases your attack rating',
function(){return ''+'<span class="num">3: </span>'+'Attack: '+dec((10+lvl(139)*5+blvl(144)*5),0)+' percent<br>'
+'<span class="num">12: </span>'+cc(['Duration: ',dec((min(250,dec(ln(lvl(139),30,5,5,2)*(100+(blvl(154)*5))/100,0)))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((2<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(blvl(126)*8,0)),' percent<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Stun Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Bash: +8% Damage per Level<br>'
+'<span class="num">63: </span>'+'Concentrate: +5% Attack Rating per Level<br>'
+'<span class="num">63: </span>'+'War Cry: +5% Duration per Level<br>'
},3,2]
desc[140]=['Double Throw',
'allows you to throw two different<br>throwing weapons at the same time',
function(){return ''+'<span class="num">8: </span>'+cc(['To Attack Rating: +',(20+(lvl(140)-1)*10),' percent<br>'])
+'<span class="num">5: </span>'+'Mana Cost: '+dec((1<<8)/128,0)+'<br>'
},
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec(blvl(133)*8,0)),' percent<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Double Throw Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Double Swing: +8% Damage per Level<br>'
},3,3]
desc[141]=['Increased Stamina',
'passive - increases your stamina',
function(){return ''+'<span class="num">2: </span>'+cc(['Stamina Bonus: ',sign(dec((30+(lvl(141)-1)*15),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,1]
desc[142]=['Find Item',
'use on the corpse of a slain monster<br>to find hidden treasures',
function(){return ''+'<span class="num">7: </span>'+dec(dm(lvl(142),5,60),0)+' percent chance<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((7<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},3,3]
desc[143]=['Leap Attack',
'leaps to and attacks target enemy<br>in one swift assault',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec((100+(lvl(143)-1)*30)+blvl(132)*10,0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec((50+(lvl(143)-1)*15),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((9<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Leap Attack Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Leap: +10% Damage per Level<br>'
},4,1]
desc[144]=['Concentrate',
'attack that is not interruptible and<br>improves attack and defense rating',
function(){return ''+'<span class="num">2: </span>'+cc(['Defense Bonus: ',sign(dec((100+(lvl(144)-1)*10),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec((60+(lvl(144)-1)*10),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec((70+(lvl(144)-1)*5)+blvl(126)*5+blvl(149)*10,0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((2<<8)/256,1),'<br>'])
},
function(){return ''+'<span class="num">2: </span>'+cc(['Magic Damage: ',sign(dec(blvl(152),0)),' percent<br>',])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Concentrate Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Bash: +5% Damage per Level<br>'
+'<span class="num">63: </span>'+'Battle Orders: +10% Damage per Level<br>'
+'<span class="num">63: </span>'+'Berserk: +1% Magic Damage per Level<br>'
},4,2]
desc[145]=['Iron Skin',
'passive - improves defense rating',
function(){return ''+'<span class="num">6: </span>'+'+'+((30+(lvl(145)-1)*10))+' percent<br>'
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,3]
desc[146]=['Battle Cry',
'fearsome cry that decreases<br>enemies defense rating and damage',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec(((300+(lvl(146)-1)*60))/25,1),' seconds<br>'])
+'<span class="num">3: </span>'+'Defense: '+dec((-50+(lvl(146)-1)*-2),0)+' percent<br>'
+'<span class="num">3: </span>'+'Damage: '+dec((-25+(lvl(146)-1)*-1),0)+' percent<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((5<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},4,1]
desc[147]=['Frenzy',
'allows you to swing two weapons at once<br>each successful attack increases your overall speed<br>requires you to equip two weapons',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec((90+(lvl(147)-1)*5)+(blvl(133)+blvl(137))*8,0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec((100+(lvl(147)-1)*7),0)),' percent<br>',])
+'<span class="num">52: </span>'+'Attack Speed: +'+dec(15*(50-0)/100+0,0)+'-'+dec(dm(lvl(147),0,50),0)+' percent<br>'
+'<span class="num">52: </span>'+'Walk/Run Speed: +'+dec(15*(200-20)/100+20,0)+'-'+dec(dm(lvl(147),20,200),0)+' percent<br>'
+'<span class="num">5: </span>'+'Mana Cost: '+dec((3<<7)/128,0)+'<br>'
},
function(){return ''+'<span class="num">2: </span>'+cc(['Magic Damage: ',sign(dec(blvl(152),0)),' percent<br>',])
+'<span class="num">12: </span>'+cc(['Duration: ',dec((150)/25,1),' seconds<br>'])
},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Frenzy Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Double Swing: +8% Damage per Level<br>'
+'<span class="num">63: </span>'+'Taunt: +8% Damage per Level<br>'
+'<span class="num">63: </span>'+'Berserk: +1% Magic Damage per Level<br>'
},5,3]
desc[148]=['Increased Speed',
'passive - increases walk and run speed',
function(){return ''+'<span class="num">2: </span>'+cc(['Walk/Run Speed: ',sign(dec(dm(lvl(148),7,50),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,1]
desc[149]=['Battle Orders',
'improves the maximum mana, life and<br>stamina of you and your party',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec(((750+(lvl(149)-1)*250)+(blvl(138)+blvl(155))*125)/25,1),' seconds<br>'])
+'<span class="num">3: </span>'+'Max Stamina: '+dec((35+(lvl(149)-1)*3),0)+' percent<br>'
+'<span class="num">3: </span>'+'Max Life: '+dec((35+(lvl(149)-1)*3),0)+' percent<br>'
+'<span class="num">3: </span>'+'Max Mana: '+dec((35+(lvl(149)-1)*3),0)+' percent<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((7<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Battle Orders Receives Bonuses From:<br>'
+'</span>'+'<span class="num">67: </span>'+'Shout: +'+dec(125/25,0)+' Seconds per Level<br>'
+'<span class="num">67: </span>'+'Battle Command: +'+dec(125/25,0)+' Seconds per Level<br>'
},5,2]
desc[150]=['Grim Ward',
'use on the corpse of a slain monster<br>to create a frightening totem<br>that causes nearby monsters to flee',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec((1000)/25,1),' seconds<br>'])
+'<span class="num">19: </span>'+'Radius: '+dec(dec((3+(lvl(150)-1)),0)*2/3,1)+' yards<br>'
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((4<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},5,3]
desc[151]=['Whirlwind',
'a whirling dance of death<br>that cuts a path through the<br>legions of your enemies',
function(){return ''+'<span class="num">2: </span>'+cc(['Damage: ',sign(dec((-50+(lvl(151)-1)*8),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec(((lvl(151)-1)*5),0)),' percent<br>',])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max((50+(lvl(151)-1))<<7,1<<8)/256,0),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,1]
desc[152]=['Berserk',
'a powerful but reckless attack<br>that increases damage and attack rating<br>but decreases defense rating',
function(){return ''+'<span class="num">2: </span>'+cc(['Attack: ',sign(dec((100+(lvl(152)-1)*15),0)),' percent<br>',])
+'<span class="num">2: </span>'+cc(['Magic Damage: ',sign(dec((150+(lvl(152)-1)*15)+(blvl(130)+blvl(138))*10,0)),' percent<br>',])
+'<span class="num">12: </span>'+cc(['Duration: ',dec((75-min(((110*lvl(152))/(lvl(152)+6)*(75-25)/100),(75-25)))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((4<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Berserk Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Howl: +10% Damage per Level<br>'
+'<span class="num">63: </span>'+'Shout: +10% Damage per Level<br>'
},6,2]
desc[153]=['Natural Resistance',
'passive - increases natural resistances<br>to elemental and poison damage',
function(){return ''+'<span class="num">2: </span>'+cc(['Resistances: ',sign(dec(dm(lvl(153),0,80),0)),' percent<br>',])
},
function(){return ''},
function(){return ''+'<span class="green">'+'</span>'},6,3]
desc[154]=['War Cry',
'injures and stuns all nearby enemies',
function(){return ''+'<span class="num">9: </span>'+'Damage: '+dec((ln(lvl(154),20,6,7,8,9,10)<<8)*(100+(blvl(130)+blvl(137)+blvl(146))*6)/25600,0)+'-'+dec((ln(lvl(154),30,6,7,8,9,10)<<8)*(100+(blvl(130)+blvl(137)+blvl(146))*6)/25600,0)+'<br>'
+'<span class="num">12: </span>'+cc(['Stun Length: ',dec((min(250,(25+(lvl(154)-1)*5)))/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec(max((10+(lvl(154)-1))<<8,1<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'War Cry Receives Bonuses From:<br>'
+'</span>'+'<span class="num">63: </span>'+'Howl: +6% Damage per Level<br>'
+'<span class="num">63: </span>'+'Taunt: +6% Damage per Level<br>'
+'<span class="num">63: </span>'+'Battle Cry: +6% Damage per Level<br>'
},6,1]
desc[155]=['Battle Command',
'increases all current skill levels for you and your party',
function(){return ''+'<span class="num">12: </span>'+cc(['Duration: ',dec(((125+(lvl(155)-1)*250)+(blvl(138)+blvl(149))*125)/25,1),' seconds<br>'])
+'<span class="num">1: </span>'+cc(['Mana Cost: ',dec((11<<8)/256,1),'<br>'])
},
function(){return ''},
function(){return ''+'<span class="green">'+'<span class="num">40: </span>'+'Battle Command Receives Bonuses From:<br>'
+'</span>'+'<span class="num">67: </span>'+'Shout: +'+dec(125/25,0)+' Seconds per Level<br>'
+'<span class="num">67: </span>'+'Battle Orders: +'+dec(125/25,0)+' Seconds per Level<br>'
},6,2]
