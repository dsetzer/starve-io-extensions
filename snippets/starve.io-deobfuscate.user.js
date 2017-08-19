// ==UserScript==
// @name         Starve.io Deobfuscated
// @namespace    http://tampermonkey.net/
// @version      0.01
// @description  Framework for deobfuscated code base
// @author       Jason Khanlar
// @match        http://starve.io/
// @grant        none
// ==/UserScript==

// Compatible with version 14 of Starve.io client

(function() {
    'use strict';

    // Required before game is fully loaded
    window.ctx = Lapa3343Mauve; // '0x537'

    window.checkLoaded = function() {
        if (typeof game !== 'undefined' && typeof ui !== 'undefined' && typeof user !== 'undefined') {
            deobfuscate();
        } else {
            setTimeout(checkLoaded, 50);
        }
    };

    window.deobfuscate_client = function() {
        window.client = Lapa3279Mauve;
        window.client.accept_build = client.Lapa3242Mauve; // '0x62f'
        window.client.build_ok = client.Lapa3243Mauve; // '0x5f9'
        window.client.build_stop = client.Lapa3244Mauve; // '0x5f6'
        window.client.cam_delay = client.Lapa3245Mauve; // '0x641'
        window.client.cancel_craft = client.Lapa3314Mauve; // '0x676'
        window.client.cancel_crafting = client.Lapa3246Mauve; // '0x7a8'
        window.client.change_ground = client.Lapa3247Mauve; // '0x610'
        window.client.check_pong = client.Lapa3248Mauve; // '0x81c'
        window.client.check_state = client.Lapa3249Mauve; // '0x81b'
        window.client.connect_timeout = client.Lapa3250Mauve; // '0x5e9'
        window.client.connect_timer = client.Lapa3251Mauve; // '0x5e0'
        window.client.decrease_item = client.Lapa3252Mauve; // '0x62d'
        window.client.delete_inv = client.Lapa3253Mauve; // '0x639'
        window.client.dont_harvest = client.Lapa3254Mauve; // '0x62a'
        window.client.empty_res = client.Lapa3255Mauve; // '0x604'
        window.client.fail_restore = client.Lapa3256Mauve; // '0x5fe'
        window.client.gauge_hunger = client.Lapa3416Mauve; // '0x60e'
        window.client.gauge_life = client.Lapa3456Mauve; // '0x60c'
        window.client.gauge_thirst = client.Lapa3420Mauve; // '0x60d'
        window.client.get_focus = client.Lapa3318Mauve; // '0x603'
        window.client.get_time = client.Lapa3258Mauve; // '0x60f'
        window.client.give_breadoven = client.give_Lapa3202Mauve; // '0x619'
        window.client.give_item = client.Lapa3260Mauve; // '0x61c'
        window.client.give_wood = client.Lapa3259Mauve; // '0x61b'
        window.client.handshake = client.Lapa3257Mauve; // '0x65f'
        window.client.hitten_other = client.Lapa3261Mauve; // '0x617'
        window.client.inv_full = client.Lapa3263Mauve; // '0x606'
        window.client.join_team = client.Lapa3230Mauve; // '0x64a'
        window.client.joined_team = client.Lapa3439Mauve; // '0x64c'
        window.client.kill_player = client.Lapa3264Mauve; // '0x612'
        window.client.last_cam = client.Lapa3265Mauve; // '0x642'
        window.client.left_team = client.Lapa3438Mauve; // '0x651'
        window.client.lock_chest = client.Lapa3266Mauve; // '0x61f'
        window.client.move_units = client.Lapa3267Mauve; // '0x63e'
        window.client.new_player = client.Lapa3268Mauve; // '0x602'
        window.client.old_version = client.Lapa3270Mauve;
        window.client.ping_delay = client.Lapa3269Mauve; // '0x645'
        window.client.quest_update = client.Lapa3198Mauve;
        window.client.recover_focus = client.Lapa3271Mauve; // '0x616'
        window.client.resurrection = client.Lapa3465Mauve; // '0x618'
        window.client.select_craft = client.Lapa3272Mauve; // '0x626' // make recipe
        window.client.select_inv = client.Lapa3273Mauve; // '0x631'
        window.client.send_angle = client.Lapa3274Mauve; // '0x63d'
        window.client.send_attack = client.Lapa3276Mauve; // '0x63c'
        window.client.send_build = client.Lapa3277Mauve; // '0x630'
        window.client.send_chat = client.Lapa3278Mauve; // '0x73d'
        window.client.send_move = client.Lapa3280Mauve;
        window.client.send_survivalkit = client.Lapa3441Mauve; // '0x825'
        window.client.server_list = client.Lapa3432Mauve; // '0x5cf'
        window.client.set_cam = client.Lapa3319Mauve; // '0x614'
        window.client.socket = client.Lapa3229Mauve; // '0x5cd' // new
        window.client.steal_token = client.Lapa3291Mauve; // '0x653'
        window.client.stop_attack = client.Lapa3292Mauve; // '0x63b'
        window.client.store_server_list = client.Lapa3281Mauve; // '0x5d6'
        window.client.survival_kit = client.Lapa3437Mauve; // '0x608'
        window.client.take_chest = client.Lapa3284Mauve; // '0x61d'
        window.client.take_flour = client.Lapa3466Mauve; // '0x820'
        window.client.team_destroyed = client.Lapa3440Mauve; // '0x64e'
        window.client.try_ping = client.Lapa3285Mauve; // '0x646'
        window.client.unlock_chest = client.unLapa3266Mauve; // '0x61e'
        window.client.update_cam = client.Lapa3287Mauve; // '0x643'
        window.client.update_server_list = client.Lapa3283Mauve; // '0x5d8'
        window.client._current_id = client.Lapa3339Mauve; // '0x5ce'
    };

    window.deobfuscate = function() {
        window.OBFUSCATED_ARR = _0xbf9d;
        window.OBFUSCATOR_FN = _0xdbf9;
        window.OBFUSCATOR_FN_INV = function(n) { for (var x=0; x<OBFUSCATED_ARR.length; x++) { if (OBFUSCATOR_FN(x) === n) return '0x'+x.toString(16); } };

        // DEOBFUSCATION
        window.canh2 = Lapa3313Mauve;
        window.canw2 = Lapa3310Mauve;

        window.CLIENT = Lapa3297Mauve;
        window.CLIENT.ATTACK = CLIENT.Lapa3306Mauve; // '0x580'
        window.CLIENT.CAM_DELAY = CLIENT.Lapa3303Mauve; // '0x644'
        window.CLIENT.LAG_DISTANCE = CLIENT.Lapa3307Mauve;
        window.CLIENT.MOVE_SPEED_MOD_ATTACK = CLIENT.Lapa3201Mauve; // '0x682'
        window.CLIENT.MUTE_DELAY = CLIENT.Lapa3304Mauve;
        window.CLIENT.ROTATE = CLIENT.Lapa3305Mauve; // '0x686'
        window.CLIENT.TEAM_FULL = CLIENT.Lapa3444Mauve; // '0x516'
        window.CLIENT.TEAM_JOIN = CLIENT.Lapa3446Mauve; // '0x515'
        window.CLIENT.TEAM_LEAVE = CLIENT.Lapa3451Mauve; // '0x513'
        window.CLIENT.TEAM_MANAGE = CLIENT.Lapa3445Mauve; // '0x7f5'
        window.CLIENT.TEAM_SHOW = CLIENT.Lapa3447Mauve; // '0x514'
        window.CLIENT.TOKEN_LEN = CLIENT.Lapa3308Mauve; // '0x722'
        window.CLIENT.VERSION_NUMBER = CLIENT.Lapa3302Mauve; // '0x679'
        window.CLIENT.WAITING_FOR_SERVER = CLIENT.Lapa3309Mauve;

        window.Client = Lapa3357Mauve;

        deobfuscate_client();

        window.COUNTER = Lapa3203Mauve;

        window.create_breadoven = create_Lapa3202Mauve;
        window.create_breadoven_off = create_Lapa3202Mauve_off;
        window.create_breadoven_ui = create_Lapa3202Mauve_ui;
        window.create_gauges_mobile = create_gauges_Lapa3450Mauve;
        window.create_leaderboard_mobile = create_leaderboard_Lapa3450Mauve;
        window.create_old_gauges = create_Lapa3455Mauve_gauges;

        window.delta = Lapa3348Mauve;

        window.draw_alert = Lapa3369Mauve;
        window.draw_alert_ghost = Lapa3366Mauve;
        window.draw_auto_feed = Lapa3371Mauve;
        window.draw_bg_transition = Lapa3373Mauve;
        window.draw_bigmap = Lapa3374Mauve;
        window.draw_bread = draw_Lapa3202Mauve;
        window.draw_breadoven_inventory = draw_Lapa3202Mauve_inventory;
        window.draw_breadoven_smog = draw_Lapa3202Mauve_smog;
        window.draw_breath = Lapa3375Mauve;
        window.draw_chat = Lapa3376Mauve;
        window.draw_chest = Lapa3378Mauve;
        window.draw_chest_inventory = Lapa3377Mauve;
        window.draw_door = Lapa3379Mauve;
        window.draw_dragon = Lapa3380Mauve;
        window.draw_fake_world = Lapa3356Mauve;
        window.draw_fg_transition = Lapa3381Mauve;
        window.draw_fire_ground = Lapa3382Mauve;
        window.draw_fire_halo = Lapa3383Mauve;
        window.draw_foot = Lapa3384Mauve;
        window.draw_furnace = Lapa3388Mauve;
        window.draw_furnace_ground = Lapa3385Mauve;
        window.draw_furnace_halo = Lapa3386Mauve;
        window.draw_furnace_inventory = Lapa3387Mauve;
        window.draw_gauges = Lapa3389Mauve;
        window.draw_ground = Lapa3390Mauve;
        window.draw_image_transition = Lapa3391Mauve;
        window.draw_imgs_transition = Lapa3393Mauve;
        window.draw_leaderboard = Lapa3394Mauve;
        window.draw_map_object = Lapa3396Mauve;
        window.draw_map_objects = Lapa3375Mauve_objects;
        window.draw_map_objects_breathless = Lapa3395Mauve;
        window.draw_map_transition = Lapa3397Mauve;
        window.draw_minimap = Lapa3398Mauve;
        window.draw_plant = Lapa3400Mauve;
        window.draw_player = Lapa3403Mauve;
        window.draw_player_clothe = Lapa3401Mauve;
        window.draw_player_effect = Lapa3403Mauve_effect;
        window.draw_player_right_stuff = Lapa3402Mauve;
        window.draw_reconnect = Lapa3404Mauve;
        window.draw_resurrection = Lapa3239Mauve;
        window.draw_resurrection_halo = Lapa3216Mauve;
        window.draw_resurrection_inventory = Lapa3220Mauve;
        window.draw_seed = Lapa3221Mauve;
        window.draw_show_spectators = Lapa3226Mauve;
        window.draw_shop_timer = Lapa3443Mauve;
        window.draw_simple_item = Lapa3228Mauve;
        window.draw_simple_mobs = Lapa3231Mauve;
        window.draw_simple_mobs_2 = Lapa3231Mauve_2;
        window.draw_team_delay = Lapa3442Mauve;
        window.draw_transition = Lapa3233Mauve;
        window.draw_ui_crafting = Lapa3234Mauve;
        window.draw_ui_inventory = Lapa3236Mauve;
        window.draw_ui_slot_item = Lapa3232Mauve;
        window.draw_ui_slot_item_count = Lapa3370Mauve;
        window.draw_weapon_switch_delay = Lapa3237Mauve;
        window.draw_winter = Lapa3238Mauve;
        window.draw_world = Lapa3359Mauve;
        window.draw_world_with_effect = Lapa3355Mauve;

        window.fake_world = Lapa3358Mauve;

        window.get_mouse_pos = Lapa3412Mauve;

        window.init_fake_world = Lapa3354Mauve;

        window.INV_INFO = Lapa3206Mauve;

        window.mobile = Lapa3450Mauve;

        window.MOUSE_MOVE = Lapa3411Mauve;
        window.MOUSE_DOWN = Lapa3410Mauve;
        window.MOUSE_UP = Lapa3406Mauve;

        window.old_timestamp = Lapa3347Mauve;

        window.game.add_event_listener = game.Lapa3344Mauve; // '0x785'
        window.game.ctx = game.Lapa3343Mauve; // '0x537'
        window.game.breadoven_bread_button = game.Lapa3202Mauve_bread_button; // '0x501'
        window.game.breadoven_flour_button = game.Lapa3202Mauve_flour_button; // '0x503'
        window.game.breadoven_wood_button = game.Lapa3202Mauve_wood_button; // '0x500'
        window.game.draw_scene = game.Lapa3346Mauve; // '0x819'
        window.game.draw_UI = game.Lapa3345Mauve; // '0x816'
        window.game.recipes = game.Lapa3204Mauve; // '0x663'
        window.game.remove_event_listener = game.Lapa3342Mauve; // '0x786'
        window.game.safe_delete = game.Lapa3199Mauve; // '0x799'
        window.game.team_id = game.Lapa3449Mauve; // '0x511'
        window.game.text_alert_queue_is_empty = game.Lapa3196Mauve; // '0x73a'
        window.game.trigger_keydown = game.Lapa3325Mauve; // '0x81e'
        window.game.trigger_keyup = game.Lapa3328Mauve; // '0x81d'
        window.game.trigger_mousedown = game.Lapa3329Mauve; // '0x789'
        window.game.trigger_mousemove = game.Lapa3330Mauve; // '0x78e'
        window.game.trigger_mouseup = game.Lapa3331Mauve; // '0x78d'
        window.game.update_breadoven_button = game.update_Lapa3202Mauve_button; // '0x734'
        window.game.update_chest_buttons = game.Lapa3332Mauve_buttons; // '0x732'
        window.game.update_connection = game.Lapa3333Mauve; // '0x81a'
        window.game.update_craft_buttons = game.Lapa3335Mauve; // '0x731'
        window.game.update_furnace_button = game.Lapa3336Mauve;
        window.game.update_inv_buttons = game.Lapa3337Mauve; // '0x5f7'
        window.game.update_scene = game.Lapa3340Mauve; // '0x817'

        window.ITEMS = Lapa3240Mauve;
        window.ITEMS.SEED = ITEMS.Lapa3464Mauve; // '0x59b'
        window.ITEMS.WHEAT_SEED = ITEMS.WHEAT_Lapa3464Mauve; // '0x1dd'

        window.RANDOM_NUMS = Lapa3459Mauve;

        window.RECIPE_CATEGORIES = Lapa3207Mauve;
        window.RECIPE_CATEGORIES.CONSTRUCTION = RECIPE_CATEGORIES.Lapa3211Mauve; // '0x71c'
        window.RECIPE_CATEGORIES.FOOD = RECIPE_CATEGORIES.Lapa3209Mauve; // '0x71b'
        window.RECIPE_CATEGORIES.HAT = RECIPE_CATEGORIES.Lapa3212Mauve; // '0x71d'
        window.RECIPE_CATEGORIES.PLACEABLE = RECIPE_CATEGORIES.Lapa3215Mauve; // '0x718'
        window.RECIPE_CATEGORIES.TOOL = RECIPE_CATEGORIES.Lapa3208Mauve; // '0x719'
        window.RECIPE_CATEGORIES.WEAPON = RECIPE_CATEGORIES.Lapa3210Mauve; // '0x71a'

        window.RECIPES = Lapa3294Mauve;

        window.SPRITE = Lapa3295Mauve;
        window.SPRITE.COUNTER = SPRITE.Lapa3203Mauve;
        window.SPRITE.CHEST_SEED = SPRITE.CHEST_Lapa3464Mauve;
        window.SPRITE.CHEST_WHEAT_SEED = SPRITE.CHEST_WHEAT_Lapa3464Mauve;
        window.SPRITE.COUNTER = SPRITE.Lapa3203Mauve;
        window.SPRITE.CRAFT_SEED = SPRITE.CRAFT_Lapa3464Mauve;
        window.SPRITE.CRAFT_WHEAT_SEED = SPRITE.CRAFT_WHEAT_Lapa3464Mauve;
        window.SPRITE.GAUGE = SPRITE.Lapa3457Mauve;
        window.SPRITE.INV_SEED = SPRITE.INV_Lapa3464Mauve;
        window.SPRITE.INV_WHEAT_SEED = SPRITE.INV_WHEAT_Lapa3464Mauve;
        window.SPRITE.KRAKEN_MIN_X = SPRITE.Lapa3467Mauve;
        window.SPRITE.PLANT_SEED = SPRITE.PLANT_Lapa3464Mauve;
        window.SPRITE.RESURRECTION_ROTATE = SPRITE.RESURRECTION_Lapa3305Mauve;
        window.SPRITE.SEED = SPRITE.Lapa3464Mauve;
        window.SPRITE.SPECIAL_ITEMS = SPRITE.SPECIAL_Lapa3240Mauve;
        window.SPRITE.UNKNOWN_MINorMAX_XorY = SPRITE.Lapa3468Mauve;
        window.SPRITE.UNKNOWN2_MINorMAX_XorY = SPRITE.Lapa3479Mauve;
        window.SPRITE.WHEAT_SEED = SPRITE.WHEAT_Lapa3464Mauve;
        window.SPRITE.WHEAT_SEED_DRIED = SPRITE.WHEAT_Lapa3464Mauve_DRIED;
        window.SPRITE.WINDMILL_WHEAT_SEED = SPRITE.WINDMILL_WHEAT_Lapa3464Mauve;

        window.STATE = Lapa3296Mauve;
        window.STATE.ATTACK = STATE.Lapa3306Mauve;

        window.ui.add_event_listener = ui.Lapa3344Mauve; // '0x785'
        window.ui.ctx = ui.Lapa3343Mauve; // '0x537'
        window.ui.remove_event_listener = ui.Lapa3342Mauve; // '0x786'
        window.ui.server_list = ui.Lapa3432Mauve; // '0x5cf'
        window.ui.set_azerty = ui.Lapa3424Mauve; // '0x5a'
        window.ui.set_qwerty = ui.Lapa3425Mauve; // '0x5d'
        window.ui.trigger_mousedown = ui.Lapa3329Mauve; // '0x789'
        window.ui.trigger_mousemove = ui.Lapa3330Mauve; // '0x78e'
        window.ui.trigger_mouseup = ui.Lapa3331Mauve; // '0x78d'

        window.user.breadoven = user.Lapa3202Mauve; // '0x4f5'
        window.user.gauges.old = user.gauges.Lapa3455Mauve; // '0x566'
        window.user.gauges.thirst = user.gauges.Lapa3454Mauve; // '0x563'
        window.user.gauges.warn_old = user.gauges.Lapa3453Mauve;
        window.user.gauges.warn_thirst = user.gauges.Lapa3452Mauve; // '0x565'
        window.user.spectators = user.Lapa3413Mauve; // '0x533'

        window.Utils = Lapa3349Mauve;
        window.Utils.cross_product= Utils.Lapa3423Mauve; // '0x10'
        window.Utils.ease_out_quad = Utils.Lapa3364Mauve; // '0x725'
        window.Utils.get_angle = Utils.Lapa3352Mauve; // '0x11'
        window.Utils.get_std_angle = Utils.Lapa3351Mauve; // '0x687'
        window.Utils.get_vector = Utils.Lapa3421Mauve; // '0x12'
        window.Utils.LinearAnimation = Utils.Lapa3350Mauve; // '0x662'
        window.Utils.open_in_new_tab = Utils.Lapa3405Mauve;
        window.Utils.rand_sign = Utils.Lapa3422Mauve; // '0x15'
        window.Utils.rand_string = Utils.Lapa3365Mauve;
        window.Utils.restore_number = Utils.Lapa3362Mauve; // '0x666'
        window.Utils.scalar_product = Utils.Lapa3419Mauve; // '0xd'
        window.Utils.simplify_number = Utils.Lapa3363Mauve; // '0x53d'
        window.Utils.translate_vector = Utils.Lapa3353Mauve;

        window.WORLD = Lapa3241Mauve;

        window.world = Lapa3360Mauve;
        window.world.delete_all_units = world.Lapa3320Mauve; // '0x623'
        window.world.delete_units = world.Lapa3321Mauve; // '0x683'
        window.world.fast_units = world.Lapa3322Mauve; // '0x4f6'
        window.world.max_units = world.Lapa3323Mauve; // '0x624'
        window.world.move_units = world.Lapa3267Mauve; // '0x63e'
        window.world.players = world.Lapa3324Mauve; // '0x531'

        // Replace this to update client variable when connecting
        setInterval(function() {
            if (client.socket !== window.Lapa3279Mauve.Lapa3229Mauve) {
                deobfuscate_client();
            }
        }, 1000);

        // END DEOBFUSCATION
    };

    checkLoaded();
})();