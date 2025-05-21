const E = {
    1: 'CASE',
    CASE: 1,
    2: 'UPGRADE',
    UPGRADE: 2,
    3: 'CONTRACT',
    CONTRACT: 3,
    4: 'GIVEAWAY',
    GIVEAWAY: 4,
    5: 'COINFLIP',
    COINFLIP: 5,
    6: 'GAME SERVER',
    GAME_SERVER: 6,
    7: 'REPLACED',
    REPLACED: 7,
    8: 'TOURNAMENT',
    TOURNAMENT: 8,
    9: 'GIFT',
    GIFT: 9
}
  , A = {
    0: 'UNPAID',
    UNPAID: 0,
    1: 'PAID',
    PAID: 1,
    2: 'ERROR',
    ERROR: 2
}
  , I = {
    0: 'UNKNOWN',
    UNKNOWN: 0,
    10: 'CONSUMER_GRADE',
    CONSUMER_GRADE: 10,
    11: 'BASE_CLASS',
    BASE_CLASS: 11,
    20: 'INDUSTRIAL_GRADE',
    INDUSTRIAL_GRADE: 20,
    30: 'MILSPEC',
    MILSPEC: 30,
    32: 'DISTINGUISHED',
    DISTINGUISHED: 32,
    40: 'RESTRICTED',
    RESTRICTED: 40,
    42: 'EXCEPTIONAL',
    EXCEPTIONAL: 42,
    50: 'CLASSIFIED',
    CLASSIFIED: 50,
    52: 'SUPERIOR',
    SUPERIOR: 52,
    60: 'COVERT',
    COVERT: 60,
    62: 'MASTER',
    MASTER: 62,
    70: 'REMARKABLE_CLASS',
    REMARKABLE_CLASS: 70,
    75: 'EXOTIC_CLASS',
    EXOTIC_CLASS: 75,
    85: 'EXTRAORDINARY_CLASS',
    EXTRAORDINARY_CLASS: 85,
    90: 'CONTRABAND_CLASS',
    CONTRABAND_CLASS: 90,
    100: 'EXCEEDINGLY_RARE',
    EXCEEDINGLY_RARE: 100
}
  , R = {
    [I.UNKNOWN]: '_unknown',
    [I.BASE_CLASS]: 'base',
    [I.CONSUMER_GRADE]: 'base',
    [I.INDUSTRIAL_GRADE]: 'industrial',
    [I.MILSPEC]: 'mil-spec',
    [I.RESTRICTED]: 'restricted',
    [I.CONTRABAND_CLASS]: 'restricted',
    [I.CLASSIFIED]: 'classified',
    [I.COVERT]: 'covert',
    [I.EXTRAORDINARY_CLASS]: 'rare',
    [I.EXOTIC_CLASS]: 'classified',
    [I.EXCEEDINGLY_RARE]: 'mil-spec',
    [I.REMARKABLE_CLASS]: 'restricted',
    [I.DISTINGUISHED]: 'mil-spec',
    [I.EXCEPTIONAL]: 'restricted',
    [I.MASTER]: 'covert',
    [I.SUPERIOR]: 'classified'
}
  , S = {
    5: 'KEY',
    KEY: 5,
    10: 'TAG',
    TAG: 10,
    15: 'PASS',
    PASS: 15,
    20: 'GIFT',
    GIFT: 20,
    25: 'SNIPER_RIFLE',
    SNIPER_RIFLE: 25,
    30: 'PISTOL',
    PISTOL: 30,
    35: 'RIFLE',
    RIFLE: 35,
    40: 'SMG',
    SMG: 40,
    45: 'MACHINEGUN',
    MACHINEGUN: 45,
    50: 'SHOTGUN',
    SHOTGUN: 50,
    55: 'KNIFE',
    KNIFE: 55,
    60: 'STICKER',
    STICKER: 60,
    65: 'CONTAINER',
    CONTAINER: 65,
    70: 'MUSIC_KIT',
    MUSIC_KIT: 70,
    75: 'TOOL',
    TOOL: 75,
    80: 'COLLECTIBLE',
    COLLECTIBLE: 80,
    85: 'GRAFFITI',
    GRAFFITI: 85,
    90: 'GLOVES',
    GLOVES: 90,
    95: 'PATCH',
    PATCH: 95,
    100: 'AGENT',
    AGENT: 100
}
  , T = {
    YES: 0,
    FULL: 1,
    NO: 2
}
  , N = {
    ON: 1,
    OFF: 0
}
  , C = {
    ON: 1,
    OFF: 0
}
  , O = {
    V1: 1,
    V2: 2
}
  , L = {
    NEW: 0,
    0: 'NEW',
    PROCESSING: 1,
    1: 'PROCESSING',
    FAIL: 2,
    2: 'FAIL'
}
  , _ = {
    NEW: 0,
    TM_WAITING: 10,
    TM_PROCESSING: 11,
    TM_TIME_IS_UP: 12,
    TM_NO_OFFERS: 13,
    TM_NOT_SENT: 14,
    TM_USER_BANNED: 15,
    INCORRECT_TRADE_LINK: 20,
    REQUIRED_OPENED_INVENTORY: 21,
    TRADELINK_CHECK_ERROR: 22,
    SOLD: 30,
    SOLD_AUTOMATICALLY: 31,
    SOLD_CUZ_WRONG_PRICE: 32,
    ACCEPTED_IN_STEAM: 40,
    NOT_ACCEPTED_ON_TIME: 41,
    USED_IN_CONTRACT: 50,
    USED_IN_UPGRADE: 51,
    USED_IN_CASEBATTLE: 52,
    USED: 61,
    EXPIRED: 62,
    REPLACED: 63,
    CANCELLED_MANUALLY: 99,
    REVOKED: 100
}
  , D = {
    NOT_SET: 0,
    0: 'NOT_SET',
    NOT_VERIFIED: 10,
    10: 'NOT_VERIFIED',
    VERIFIED: 20,
    20: 'VERIFIED'
};
export {S as A, E as D, D as E, A as P, T as S, C as U, R as a, I as b, N as c, _ as d, L as e, O as f};
