var app = app || {vars:{},u:{}}; //make sure app exists.

// A list of all the extensions that are going to be used.
//if an extension is 'required' for any page within the store to load properly, the extension should be added as a dependency within quickstart.js
app.vars.extensions = [
	{"namespace":"store_prodlist","filename":"extensions/store_prodlist.js"},
//	{"namespace":"convertSessionToOrder","filename":"extensions/checkout_passive/extension.js"},  /* checkout_passive does not require buyer to login */
	{"namespace":"convertSessionToOrder","filename":"extensions/checkout_stage3_nice/extension.js"},	/* checkout_nice prompts buyer to login */
	{"namespace":"store_checkout","filename":"extensions/store_checkout.js"},
	{"namespace":"store_navcats","filename":"extensions/store_navcats.js"},
	{"namespace":"store_search","filename":"extensions/store_search.js"},
	{"namespace":"store_product","filename":"extensions/store_product.js"},
	{"namespace":"store_cart","filename":"extensions/store_cart.js"},
//	{"namespace":"analytics_google","filename":"extensions/analytics_google.js","callback":"addTriggers"},
//	{"namespace":"bonding_buysafe","filename":"extensions/bonding_buysafe.js","callback":"addTriggers"},
	{"namespace":"store_crm","filename":"extensions/store_crm.js"},
	{"namespace":"myRIA","filename":"stage3_quickstart.js","callback":"startMyProgram"}
	];



app.vars.catTemplates = {
	".00001mustang2011" : "subcatandbannerlist",
	".careers" : "categoryTemplateTour",
	".mustang_news.1-26-2011_roush_mustang_desktop_wallpapers" : "~desktopwallpapergallery",
	".mustang_news.1-26-2011_roush_mustang_desktop_wallpapers.roush_black_red_rs3_mustang" : "~newphotogallery",
	".mustang_news.1-26-2011_roush_mustang_desktop_wallpapers.roush_black_rs3_race_car" : "~newphotogallery",
	".mustang_news.1-26-2011_roush_mustang_desktop_wallpapers.roush_black_rs3_racer_front" : "~newphotogallery",
	".mustang_news.1-26-2011_roush_mustang_desktop_wallpapers.roush_red_stage_3_mustang_train_station" : "~newphotogallery",
	".mustang_news.1-26-2011_roush_mustang_desktop_wallpapers.roush_white_stage_3_with_bricks" : "~newphotogallery",
	".mustang_pictures.1999_04_mustang_pictures_2" : "~photogallerybest",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2011_mustang_wheel_hop_fix" : "~stage3motorsports_c_article_20100131",
	".900clearanceitems.stage_3_motorsports_coupon_code" : "categoryTemplateTour",
	".950manufacturslist.roushperformance.roush_crate_engines" : "categoryTemplateTour",
	".dieselperformancestore.shop_by_manufacturer.afe_filters_intakes__exhaust.afe_filter_selections" : "categoryTemplateTour",
	".dieselperformancestore.shop_by_manufacturer.afe_filters_intakes__exhaust.afe_intake_selections" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.1-13-2011_creating_the_perfect_lift_on_ford_trucks" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.1-20-2011_understanding_tuning_options_for_your_ford_super_duty_truck" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.1-20-2012_improving_super_duty_performance_with_an_airdog_air_fuel_separator" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.1-5-2012_aftermarket_lighting_for_your_ford_truck" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.11-11-2011_the_dpf_delete_and_you_" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.12-16-2011_new_2011_to_2012_super_duty_recon_projector_headlights" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.12-19-2011_2011_and_2012_super_duty_performance_upgrades_for_under__2000" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.12-20-2011_easy_performance_upgrades_for_2008_to_2010_super_dutys" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.12-20-2011_performance_enhancements_for_2004_to_2007_ford_power_strokes" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.2-10-2011_ford_super_duty_wheel_and_tire_setups" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.2-10-2011_improving_powerstroke_performance_with_water-methanol_injection" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.2-16-2012_ford_powerstroke_exterior_styling_options" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.2-24-2012_daystar_f-150_leveling_kits" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.2-24-2012_f-250___f-350_daystar_leveling_kits" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.2-24-2012_roushing_your_ford_raptor" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.3-2-2012_ford_super_duty_brake_upgrades" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.3-2-2012_zone_off-road_f-250_f-350_lift_kits" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.3-2-2012_zone_offroad_f-150_lift_kits" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.4-6-2012_how_to_choose_the_right_super_duty_fabtech_lift_kit" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.5-11-2012_f-150_50l_performance_parts_from_stage_3" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.5-11-2012_svt_raptor_performance_parts_and_packages" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.5-18-2012_rigid_industries_led_lights_for_ford_trucks" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.5-2-2012_installing_hid_conversion_kits_on_ford_super_dutys" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.5-25-2012_improved_super_duty_tuning_options_from_edge_and_superchips" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.6-29-2012_free_edge_cs_and_cts_mystyle_backgrounds_from_stage_3_off-road" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.6-29-2012_stage_3_off-road_s_edge_evolution_cts_giveaway" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_news.car_care_one_financing_" : "categoryTemplateTour",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_engine_install_guides.2005-2009_c___l_racer_cold_air_intake_install" : "categoryTemplateTour",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_engine_install_guides.2005-2009_mustang_gt_airaid_cold_air_intake_" : "categoryTemplateTour",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_engine_install_guides.2005-2009_mustang_gt_steeda_cold_air_intake_install" : "categoryTemplateTour",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_engine_install_guides.2005-2010_mustang_bbk_cold_air_intake_installtion" : "categoryTemplateTour",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_engine_install_guides.2005-2010_mustang_gt_bbk_throttle_body" : "categoryTemplateTour",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_exhaust_install_guides.2005-20010_mustang_gt_slp_loud-mouth_axle_back" : "categoryTemplateTour",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_exhaust_install_guides.2005-2009_mustang_gt_flowmaster_axle_back" : "categoryTemplateTour",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_exhaust_install_guides.2005-2010_mustang_gt_bbk_long_tube_headers" : "categoryTemplateTour",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_exhaust_install_guides.2005-2010_mustang_gt_bbk_shorty_headers" : "categoryTemplateTour",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_exhaust_install_guides.2005-2010_mustang_gt_bbk_shorty_x_pipe_" : "categoryTemplateTour",
	".installation___tech_.mustang_installation_articles.2011__mustang_install_articles.jba_clamp-on_h-pipe_and_cat-back_install" : "categoryTemplateTour",
	".mustang_news.1-11-2012_the_beautiful_legacy_and_downfall_of_saleen" : "categoryTemplateTour",
	".mustang_news.1-13-2011_the_best_non-roush_parts_for_roush_mustangs" : "categoryTemplateTour",
	".mustang_news.1-13-2012_warranty_issue___2011_to_2012_roush_axle-back_exhaust_kit__roush_part__421127_" : "categoryTemplateTour",
	".mustang_news.1-16-2012_california_emissions_advisory" : "categoryTemplateTour",
	".mustang_news.1-16-2012_exhaust_legal_notice" : "categoryTemplateTour",
	".mustang_news.1-16-2012_stage_3_pricing" : "categoryTemplateTour",
	".mustang_news.1-16-2012_stage_3_s_instant_rebate_program" : "categoryTemplateTour",
	".mustang_news.1-26-2012_roush_smart_phone_wallpapers" : "categoryTemplateTour",
	".mustang_news.1-27-2012_overhauling_your_2005_to_2012_mustang_s_suspension_system" : "categoryTemplateTour",
	".mustang_news.1-27-2012_the_best_suspension_gear_for_your_1987_to_2004_mustang" : "categoryTemplateTour",
	".mustang_news.1-5-2012_mounting_a_gt_front_fascia_on_your_2005_to_2009_v6_mustang" : "categoryTemplateTour",
	".mustang_news.10-12-2012_pypes_exhaust_fall_rebate" : "categoryTemplateTour",
	".mustang_news.10-2-2012_stage_3_brochure_contest" : "categoryTemplateTour",
	".mustang_news.10-28-2011_2_the_physics_of_steeda_s_mustang_ball_joints" : "categoryTemplateTour",
	".mustang_news.10-28-2011_how_to_upgrade_your_2005-2009_roush_mustang" : "categoryTemplateTour",
	".mustang_news.10-28-2011_updating_your_roush_blackjack_mustang" : "categoryTemplateTour",
	".mustang_news.10-3-2012_information_security_at_stage_3_motorsports" : "categoryTemplateTour",
	".mustang_news.10_14_11_the_corbeau_seat_decision" : "categoryTemplateTour",
	".mustang_news.10_21_11_the_essential_exhaust_choice" : "categoryTemplateTour",
	".mustang_news.11-1-2011_how_to_upgrade_your_1999-2004_roush_mustang" : "categoryTemplateTour",
	".mustang_news.11-11-2011_the_mustang_exhaust_breakdown" : "categoryTemplateTour",
	".mustang_news.11-18-2011_upgrading_your_mustang_s_brakes" : "categoryTemplateTour",
	".mustang_news.11-3-2011_roush_superchargers___the_m90_or_tvs2300" : "categoryTemplateTour",
	".mustang_news.12-12-2011_roush_winter_sale" : "categoryTemplateTour",
	".mustang_news.12-9-2011_a_look_back_at_the_roush_500rc" : "categoryTemplateTour",
	".mustang_news.2-10-2011_water-methanol_injection_systems_for_ford_mustangs" : "categoryTemplateTour",
	".mustang_news.2-16-2012_mustang_cold_air_intakes_and_tuning_options" : "categoryTemplateTour",
	".mustang_news.2-24-2012_borla_mustang_exhaust_system_breakdown" : "categoryTemplateTour",
	".mustang_news.3-1-2012_stage_3_motorsports__8th_birthday_" : "categoryTemplateTour",
	".mustang_news.3-16-2012_2013_mustang_parts_now_at_stage_3" : "categoryTemplateTour",
	".mustang_news.3-23-2012_engine_building_101___the_stroker_kit" : "categoryTemplateTour",
	".mustang_news.3-30-2012_mustang_performance_exhaust_packages_from_jba" : "categoryTemplateTour",
	".mustang_news.3-8-2012_a_new_home_for_stage_3_motorsports" : "categoryTemplateTour",
	".mustang_news.4-6-2012_updates__top_sellers__and_our_best_mustang_performance_parts" : "categoryTemplateTour",
	".mustang_news.5-11-2012_stage_3_s_2013_mustang_exhaust_system_breakdown" : "categoryTemplateTour",
	".mustang_news.5-18-2012_new_b_m_racing_and_hurst_shifters_mustang_performance_parts" : "categoryTemplateTour",
	".mustang_news.5-2-2012_how_to_install_hid_kits_on_your_ford_mustang" : "categoryTemplateTour",
	".mustang_news.5-25-2012_2005_to_2013_mustang_air_lift_suspension_kit_explained" : "categoryTemplateTour",
	".mustang_news.5-25-2012_stage_3_s_june_t-shirt_promotion" : "categoryTemplateTour",
	".mustang_news.5-4-2012_stage_3_now_shipping_even_more_2013_mustang_performance_parts" : "categoryTemplateTour",
	".mustang_news.6-21-2012_mustang_fuel_injectors_from_stage_3_motorsports" : "categoryTemplateTour",
	".mustang_news.6-21-2012_mustang_hood_options_from_stage_3_motorsports" : "categoryTemplateTour",
	".mustang_news.6-29-2012_afco_mustang_heat_exchangers_now_at_stage_3_motorsports" : "categoryTemplateTour",
	".mustang_news.6-29-2012_july_sale___10__off_selected_brake_kits" : "categoryTemplateTour",
	".mustang_news.6-8-2012_excellent_deals_with_powerstop_mustang_rotors_and_kits" : "categoryTemplateTour",
	".mustang_news.6-8-2012_new_diablosport_handheld_tuner_for_ford_mustangs_and_f-150s" : "categoryTemplateTour",
	".mustang_news.7-13-2012_stage_3_now_shipping_more_ford_racing_mustang_performance_parts_" : "categoryTemplateTour",
	".mustang_news.7-26-2012_stage_3_s_august_tuner_package_and_go-pro_promos" : "categoryTemplateTour",
	".mustang_news.8-24-2012_1999_to_2004_saleen_restoration_parts" : "categoryTemplateTour",
	".mustang_news.8-30-2012_it_s_steeda_september_at_stage_3_motorsports" : "categoryTemplateTour",
	".mustang_news.9-24-2012_2007_mustang_v6_airaid_cai_installed_pictures" : "categoryTemplateTour",
	".mustang_news.9-24-2012_stage_3_s_prescott_mustang_cruise_november_9th__2012" : "categoryTemplateTour",
	".mustang_news.9-26-2012_2013_gt500_grille_on_a_2011_gt500" : "categoryTemplateTour",
	".mustang_news.9-26-2012_decked_out_2012_50l_in_front_of_another_speed_king" : "categoryTemplateTour",
	".mustang_news.9-27-2012_airaid_filters_factory_tour" : "categoryTemplateTour",
	".mustang_news.stage_3_motorsports_now_ships_to_canada" : "categoryTemplateTour",
	".mustang_news.stage_3_motorsports_offers_military_discount_" : "categoryTemplateTour",
	".mustang_news.stage_3_motorsports_price_match" : "categoryTemplateTour",
	".mustang_news.steeda_sn95_water_pump_guide" : "categoryTemplateTour",
	".mustang_news.wilwood_brake_testing_procedure" : "categoryTemplateTour",
	".shop_by_category.mustang_nitrous_systems.mustang_nitrous_install_guide" : "categoryTemplateTour",
	".shop_by_category.mustang_nitrous_systems.zex_mustang_nitrous_install_and_test" : "categoryTemplateTour",
	".950manufacturslist.katzkin_mustang_seat_covers" : "categoryTemplateTour",
	".975silverstang.2003_svt_cobra___mr_whipple" : "categoryTemplateTour",
	".975silverstang.2005_mustang_race_car" : "categoryTemplateTour",
	".975silverstang.2005_supercharged_mustang_gt___silver_stang" : "categoryTemplateTour",
	".975silverstang.2006_mustang_gt_" : "categoryTemplateTour",
	".975silverstang.2006_mustang_gt___p51_stallion" : "categoryTemplateTour",
	".975silverstang.2006_mustang_gt_twin_turbo_drag_car" : "categoryTemplateTour",
	".975silverstang.2007_mustang_gt___t_roush" : "categoryTemplateTour",
	".975silverstang.2007_roush_trak_pak___race_car" : "categoryTemplateTour",
	".975silverstang.stage_3_shop_tour" : "categoryTemplateTour",
	".best_sellers" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_custom_tuning" : "categoryTemplateTour",
	".dieselperformancestore.stage_3_off_road_financing" : "categoryTemplateTour",
	".financing" : "categoryTemplateTour",
	".installation___tech_.ford_mustang_production_numbers.mustang_production_numbers" : "categoryTemplateTour",
	".installation___tech_.ford_mustang_production_numbers.roush_mustang_production_numbers" : "categoryTemplateTour",
	".installation___tech_.ford_mustang_production_numbers.saleen_mustang_production_numbers" : "categoryTemplateTour",
	".installation___tech_.ford_mustang_production_numbers.svt_mustang_production_numbers" : "categoryTemplateTour",
	".installation___tech_.frequently_asked_questions__faq_.faq__free_shipping" : "categoryTemplateTour",
	".installation___tech_.frequently_asked_questions__faq_.faq__mustang_body_kits" : "categoryTemplateTour",
	".installation___tech_.frequently_asked_questions__faq_.faq__mustang_brakes" : "categoryTemplateTour",
	".installation___tech_.frequently_asked_questions__faq_.faq__mustang_exhaust" : "categoryTemplateTour",
	".installation___tech_.frequently_asked_questions__faq_.faq__mustang_paint_codes" : "categoryTemplateTour",
	".installation___tech_.frequently_asked_questions__faq_.faq__mustang_painted_parts" : "categoryTemplateTour",
	".installation___tech_.frequently_asked_questions__faq_.faq__mustang_saleen_supershaker" : "categoryTemplateTour",
	".installation___tech_.frequently_asked_questions__faq_.faq__mustang_suspension__springs" : "categoryTemplateTour",
	".jack_roush_appearance_2012_" : "categoryTemplateTour",
	".mustang_info.1987_mustang_gt" : "categoryTemplateTour",
	".mustang_info.1988_mustang_gt" : "categoryTemplateTour",
	".mustang_info.1989_mustang_gt" : "categoryTemplateTour",
	".mustang_info.1990_mustang_gt" : "categoryTemplateTour",
	".mustang_info.1991_mustang_gt" : "categoryTemplateTour",
	".mustang_info.1992_mustang_gt" : "categoryTemplateTour",
	".mustang_info.1993_mustang_gt" : "categoryTemplateTour",
	".mustang_info.1994_mustang_gt" : "categoryTemplateTour",
	".mustang_info.1995_mustang_gt" : "categoryTemplateTour",
	".mustang_info.1996_mustang_gt" : "categoryTemplateTour",
	".mustang_info.1997_mustang_gt_" : "categoryTemplateTour",
	".mustang_info.1998_mustang_gt" : "categoryTemplateTour",
	".mustang_info.1999_mustang_gt" : "categoryTemplateTour",
	".mustang_info.2000_mustang_gt" : "categoryTemplateTour",
	".mustang_info.2001_mustang_gt" : "categoryTemplateTour",
	".mustang_info.2002_mustang_gt" : "categoryTemplateTour",
	".mustang_info.2003_mustang_gt" : "categoryTemplateTour",
	".mustang_info.2004_mustang_gt_" : "categoryTemplateTour",
	".mustang_info.2005_mustang_gt_v6" : "categoryTemplateTour",
	".mustang_info.2006_mustang_gt_v6" : "categoryTemplateTour",
	".mustang_info.2007_mustang_gt_v6" : "categoryTemplateTour",
	".mustang_info.2008_mustang_gt_v6" : "categoryTemplateTour",
	".mustang_info.2009_mustang_gt_v6" : "categoryTemplateTour",
	".mustang_info.2010_mustang_gt_v6" : "categoryTemplateTour",
	".mustang_info.2011_mustang_gt_v6" : "categoryTemplateTour",
	".mustang_info.2012_mustang_gt_v6" : "categoryTemplateTour",
	".mustang_info.2013_mustang_gt_v6" : "categoryTemplateTour",
	".mustang_news.10_25_11_pcm_flash_loyalty_program" : "categoryTemplateTour",
	".mustang_news.risk_free_product_program" : "categoryTemplateTour",
	".mustang_parts.1996_mustang_parts" : "categoryTemplateTour",
	".shipping.freight_shipping_policy" : "categoryTemplateTour",
	".stage3camaro.camaro_freight_shipping_policy_" : "categoryTemplateTour",
	".dieselperformancestore.shop_by_f-250_f-350_category_.f250___f350_exhaust_tips" : "subcatandbannerlist",
	".00001mustang2011.2011_mustang_air__fuel_delivery_" : "subcatandbannerlist",
	".00001mustang2011.2011_mustang_brakes" : "subcatandbannerlist",
	".00001mustang2011.2011_mustang_engine" : "subcatandbannerlist",
	".00001mustang2011.2011_mustang_exhaust_kits" : "subcatandbannerlist",
	".00001mustang2011.2011_mustang_exterior__body_kits" : "subcatandbannerlist",
	".00001mustang2011.2011_mustang_suspension" : "subcatandbannerlist",
	".0001mustang2010" : "subcatandbannerlist",
	".0001mustang2010.air__fuel_delivery_" : "subcatandbannerlist",
	".0001mustang2010.brakes" : "subcatandbannerlist",
	".0001mustang2010.engine" : "subcatandbannerlist",
	".0001mustang2010.exhaust" : "subcatandbannerlist",
	".0001mustang2010.exterior__body_kits" : "subcatandbannerlist",
	".0001mustang2010.suspension" : "subcatandbannerlist",
	".001mustang07" : "subcatandbannerlist",
	".001mustang07.air_fuel_delivery" : "subcatandbannerlist",
	".001mustang07.drivetrain" : "subcatandbannerlist",
	".001mustang07.exhaust" : "subcatandbannerlist",
	".001mustang07.exterior___body" : "subcatandbannerlist",
	".001mustang07.suspension___steering" : "subcatandbannerlist",
	".100mustang2005" : "subcatandbannerlist",
	".100mustang2005.accessories" : "subcatandbannerlist",
	".100mustang2005.airfueldelivery" : "subcatandbannerlist",
	".100mustang2005.airfueldelivery.superchargr_kits" : "subcatandbannerlist",
	".100mustang2005.brakesrearaxle" : "subcatandbannerlist",
	".100mustang2005.engine" : "subcatandbannerlist",
	".100mustang2005.exhaust" : "subcatandbannerlist",
	".100mustang2005.exteriorbody" : "subcatandbannerlist",
	".100mustang2005.exteriorbody.stripes" : "subcatandbannerlist",
	".100mustang2005.interior" : "subcatandbannerlist",
	".100mustang2005.interior.racing_seats" : "subcatandbannerlist",
	".100mustang2005.power_packages" : "subcatandbannerlist",
	".100mustang2005.suspensionsteering" : "subcatandbannerlist",
	".100mustang2005.wheelstires" : "subcatandbannerlist",
	".105mustang2005" : "subcatandbannerlist",
	".105mustang2005.exterior___body" : "subcatandbannerlist",
	".105mustang2005.interior" : "subcatandbannerlist",
	".105mustang2005.interior.racing_seats" : "subcatandbannerlist",
	".105mustang2005.wheels___tires" : "subcatandbannerlist",
	".110mustang0304" : "subcatandbannerlist",
	".110mustang0304.exhaust_" : "subcatandbannerlist",
	".110mustang0304.exterior___body" : "subcatandbannerlist",
	".110mustang0304.wheels___tires" : "subcatandbannerlist",
	".150mustang9404" : "subcatandbannerlist",
	".150mustang9404.airfueldelivery" : "subcatandbannerlist",
	".150mustang9404.brakesrearaxle" : "subcatandbannerlist",
	".150mustang9404.engine" : "subcatandbannerlist",
	".150mustang9404.exhaust" : "subcatandbannerlist",
	".150mustang9404.exteriorbody" : "subcatandbannerlist",
	".150mustang9404.interior" : "subcatandbannerlist",
	".150mustang9404.suspensionsteering" : "subcatandbannerlist",
	".150mustang9404.suspensionsteering.front_suspension" : "subcatandbannerlist",
	".150mustang9404.suspensionsteering.rear_suspension" : "subcatandbannerlist",
	".150mustang9404.wheelstires" : "subcatandbannerlist",
	".175mustang94_" : "subcatandbannerlist",
	".175mustang94_.wheels___tires" : "subcatandbannerlist",
	".180mustang_1994_98" : "subcatandbannerlist",
	".180mustang_1994_98.air_fuel_delivery" : "subcatandbannerlist",
	".180mustang_1994_98.air_fuel_delivery.1994_98_mustang_cold_air_intakes" : "subcatandbannerlist",
	".180mustang_1994_98.exhaust" : "subcatandbannerlist",
	".180mustang_1994_98.suspension_steering" : "subcatandbannerlist",
	".180mustang_1994_98.wheels__tires" : "subcatandbannerlist",
	".200mustang7993" : "subcatandbannerlist",
	".200mustang7993.airfueldelivery" : "subcatandbannerlist",
	".200mustang7993.engine" : "subcatandbannerlist",
	".200mustang7993.exhaust" : "subcatandbannerlist",
	".200mustang7993.exteriorbody" : "subcatandbannerlist",
	".200mustang7993.interior" : "subcatandbannerlist",
	".200mustang7993.suspensionsteering" : "subcatandbannerlist",
	".200mustang7993.suspensionsteering.front_suspension" : "subcatandbannerlist",
	".200mustang7993.suspensionsteering.rear_suspension" : "subcatandbannerlist",
	".200mustang7993.wheelstires" : "subcatandbannerlist",
	".350f1509703" : "subcatandbannerlist",
	".350f1509703.exteriorbody" : "subcatandbannerlist",
	".400f1500406" : "subcatandbannerlist",
	".400f1500406.airfueldelivery" : "subcatandbannerlist",
	".400f1500406.exteriorbody" : "subcatandbannerlist",
	".420f1502009" : "subcatandbannerlist",
	".420f1502009.2009-2010_f150_cold_air_intakes" : "subcatandbannerlist",
	".420f1502009.2010-2011_f150_raptor_parts" : "subcatandbannerlist",
	".450f150lightningharle" : "subcatandbannerlist",
	".500f250f3509906" : "subcatandbannerlist",
	".500f250f3509906.1999-03_73l_super_duty_parts" : "subcatandbannerlist",
	".500f250f3509906.2003-07_60l_super_duty_parts" : "subcatandbannerlist",
	".500f250f3509906.2008-10_64l_super_duty_parts" : "subcatandbannerlist",
	".500f250f3509906.airfueldelivery" : "subcatandbannerlist",
	".850enginescomponents" : "subcatandbannerlist",
	".850enginescomponents.strokerkits" : "subcatandbannerlist",
	".900clearanceitems" : "subcatandbannerlist",
	".950manufacturslist" : "subcatandbannerlist",
	".950manufacturslist.3d_carbon_mustang_body_kits" : "subcatandbannerlist",
	".950manufacturslist.airaid_cold_air_intakes" : "subcatandbannerlist",
	".950manufacturslist.autometer" : "subcatandbannerlist",
	".950manufacturslist.baer_brakes" : "subcatandbannerlist",
	".950manufacturslist.bassani_exhaust" : "subcatandbannerlist",
	".950manufacturslist.bbkperformance" : "subcatandbannerlist",
	".950manufacturslist.borla_mustang_performance__exhaust" : "subcatandbannerlist",
	".950manufacturslist.cervinis_auto_design" : "subcatandbannerlist",
	".950manufacturslist.classic_design_concepts" : "subcatandbannerlist",
	".950manufacturslist.corbeau_racing_seats" : "subcatandbannerlist",
	".950manufacturslist.eibach" : "subcatandbannerlist",
	".950manufacturslist.hawk_brake_pads" : "subcatandbannerlist",
	".950manufacturslist.jba_headers" : "subcatandbannerlist",
	".950manufacturslist.k_n_intakes___filters" : "subcatandbannerlist",
	".950manufacturslist.mgp_mustang_caliper_covers" : "subcatandbannerlist",
	".950manufacturslist.oe_wheels" : "subcatandbannerlist",
	".950manufacturslist.procharger_mustang_superchargers" : "subcatandbannerlist",
	".950manufacturslist.rolling_big_power" : "subcatandbannerlist",
	".950manufacturslist.roushperformance" : "subcatandbannerlist",
	".950manufacturslist.roushperformance.roush_body_kits" : "subcatandbannerlist",
	".950manufacturslist.saleen" : "subcatandbannerlist",
	".950manufacturslist.shelby_performance_parts" : "subcatandbannerlist",
	".950manufacturslist.silverhorse_racing_products" : "subcatandbannerlist",
	".950manufacturslist.stainless_works_headers" : "subcatandbannerlist",
	".950manufacturslist.steeda" : "subcatandbannerlist",
	".950manufacturslist.streetscene" : "subcatandbannerlist",
	".950manufacturslist.vortech_superchargers" : "subcatandbannerlist",
	".950manufacturslist.wheelreplicas" : "subcatandbannerlist",
	".950manufacturslist.xenon_" : "subcatandbannerlist",
	".975silverstang" : "subcatandbannerlist",
	".dieselperformancestore" : "subcatandbannerlist",
	".dieselperformancestore.f-150_1997-2003" : "subcatandbannerlist",
	".dieselperformancestore.f-150_2004-2008" : "subcatandbannerlist",
	".dieselperformancestore.f-150_2004-2008.2004-2008_f150_cold_air_intakes" : "subcatandbannerlist",
	".dieselperformancestore.f-150_2004-2008.2004-2008_f150_wheels___tires" : "subcatandbannerlist",
	".dieselperformancestore.f-150_2009-2012" : "subcatandbannerlist",
	".dieselperformancestore.f-150_2009-2012.2009-2012_f150_wheels" : "subcatandbannerlist",
	".dieselperformancestore.f-250_f-350_1994-1997" : "subcatandbannerlist",
	".dieselperformancestore.f-250_f350_1999-2003" : "subcatandbannerlist",
	".dieselperformancestore.f-250_f350_1999-2003.1999-2003_f250__f350_exhaust_systems" : "subcatandbannerlist",
	".dieselperformancestore.f-250_f350_1999-2003.1999-2003_f250__f350_wheels" : "subcatandbannerlist",
	".dieselperformancestore.f-250_f350_2004-2007" : "subcatandbannerlist",
	".dieselperformancestore.f-250_f350_2008-2010" : "subcatandbannerlist",
	".dieselperformancestore.f-250_f350_2008-2010.2008-2010_f250__f350_exhaust_systems" : "subcatandbannerlist",
	".dieselperformancestore.f-250_f350_2011-2012" : "subcatandbannerlist",
	".dieselperformancestore.f-250_f350_2011-2012.2011-2012_f250_f350_exhaust" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-150_category_" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-150_category_.f150_billet_grilles" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-150_category_.f150_body_kits" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-150_category_.f150_brakes" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-150_category_.f150_cold_air_intakes" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-150_category_.f150_exhaust_systems" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-150_category_.f150_headlights__tail_lights" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-150_category_.f150_side_steps" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-150_category_.f150_suspension_lift_kits" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-150_category_.f150_tonneau_covers" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-150_category_.f150_tuners___programmers" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-150_category_.f150_wheels__tires" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-250_f-350_category_" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-250_f-350_category_.f250___f350_exterior_upgrades" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-250_f-350_category_.f250___f350_headlights___tail_lights" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-250_f-350_category_.f250___f350_side_steps" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-250_f-350_category_.f250__f350_billet_grilles" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-250_f-350_category_.f250__f350_cold_air_intakes" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-250_f-350_category_.f250__f350_exhaust_systems" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-250_f-350_category_.f250__f350_programmers" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-250_f-350_category_.f250__f350_suspension_lift_kits" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-250_f-350_category_.f250__f350_tonneau_covers" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_f-250_f-350_category_.f250__f350_wheels" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_manufacturer" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_manufacturer.diamond_eye_performance_exhaust" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_manufacturer.fabtech_motorsports" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_manufacturer.rolling_big_power_f150___f250_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_by_manufacturer.zone_f150__f250____f350_off-road_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.1997_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.1998_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.1999_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.2000_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.2001_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.2002_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.2003_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.2004_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.2005_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.2006_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.2007_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.2008_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.2009_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.2010_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-150_parts.2011_ford_f150_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-250__f-350_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-250__f-350_parts.1999_f-250__f-350_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-250__f-350_parts.2000_f-250__f-350_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-250__f-350_parts.2001_f-250__f-350_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-250__f-350_parts.2002_f-250__f-350_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-250__f-350_parts.2003_f-250__f-350_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-250__f-350_parts.2004_f-250__f-350_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-250__f-350_parts.2005_f-250__f-350_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-250__f-350_parts.2006_f-250__f-350_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-250__f-350_parts.2007_f-250__f-350_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-250__f-350_parts.2008_f-250__f-350_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-250__f-350_parts.2009_f-250__f-350_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-250__f-350_parts.2010_f-250__f-350_parts" : "subcatandbannerlist",
	".dieselperformancestore.shop_f-250__f-350_parts.2011_f-250__f-350_parts" : "subcatandbannerlist",
	".dieselperformancestore.stage_3_off_road_news" : "subcatandbannerlist",
	".dieselperformancestore.stage_3_offroad_rides" : "subcatandbannerlist",
	".installation___tech_" : "subcatandbannerlist",
	".installation___tech_.ford_mustang_production_numbers" : "subcatandbannerlist",
	".installation___tech_.frequently_asked_questions__faq_" : "subcatandbannerlist",
	".installation___tech_.mustang_installation_articles" : "subcatandbannerlist",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles" : "subcatandbannerlist",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_brakes_install_guides" : "subcatandbannerlist",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_drivetrain_install_guides" : "subcatandbannerlist",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_engine_install_guides" : "subcatandbannerlist",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_exhaust_install_guides" : "subcatandbannerlist",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_exterior_install_guides" : "subcatandbannerlist",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_interior_install_guides" : "subcatandbannerlist",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.2005-2010_mustang_suspension_install_guides" : "subcatandbannerlist",
	".installation___tech_.mustang_installation_articles.2005_09_mustang_installation_articles.install_guide_submissions" : "subcatandbannerlist",
	".installation___tech_.mustang_installation_articles.2011__mustang_install_articles" : "subcatandbannerlist",
	".installation___tech_.mustang_installation_videos" : "subcatandbannerlist",
	".installation___tech_.recommended_tire_sizes" : "subcatandbannerlist",
	".mustang_info" : "subcatandbannerlist",
	".mustang_news" : "subcatandbannerlist",
	".mustang_news.newsletters" : "subcatandbannerlist",
	".mustang_parts" : "subcatandbannerlist",
	".mustang_parts.1997_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.1998_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.1999_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.2000_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.2001_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.2002_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.2003_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.2004_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.2005_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.2006_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.2007_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.2008_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.2009_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.2010_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.2011_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.2012_mustang_parts" : "subcatandbannerlist",
	".mustang_parts.2013_mustang_parts" : "subcatandbannerlist",
	".mustang_pictures" : "subcatandbannerlist",
	".rb.1197_04_c5_corvette" : "subcatandbannerlist",
	".rb.1998_02_camaro_ls1" : "subcatandbannerlist",
	".rb.2005_07_c6_corvette" : "subcatandbannerlist",
	".rb.2005_07_c6_corvette.2005-09_c6_z06_corvette_performance_packages" : "subcatandbannerlist",
	".rb.2008_camaro" : "subcatandbannerlist",
	".rb.2008_camaro.exhaust" : "subcatandbannerlist",
	".rb.shop_by_manufacturer" : "subcatandbannerlist",
	".shop_by_category" : "subcatandbannerlist",
	".shop_by_category.mustang_accessories" : "subcatandbannerlist",
	".shop_by_category.mustang_billet_grilles" : "subcatandbannerlist",
	".shop_by_category.mustang_body_kits" : "subcatandbannerlist",
	".shop_by_category.mustang_body_kits.mustang_spoilers" : "subcatandbannerlist",
	".shop_by_category.mustang_brake_caliper_paint" : "subcatandbannerlist",
	".shop_by_category.mustang_brake_caliper_paint.mustang_brake_rotors" : "subcatandbannerlist",
	".shop_by_category.mustang_cold_air_intakes" : "subcatandbannerlist",
	".shop_by_category.mustang_engine_parts" : "subcatandbannerlist",
	".shop_by_category.mustang_exhaust" : "subcatandbannerlist",
	".shop_by_category.mustang_floor_mats" : "subcatandbannerlist",
	".shop_by_category.mustang_headers" : "subcatandbannerlist",
	".shop_by_category.mustang_headlights" : "subcatandbannerlist",
	".shop_by_category.mustang_hoods" : "subcatandbannerlist",
	".shop_by_category.mustang_intake_packages" : "subcatandbannerlist",
	".shop_by_category.mustang_nitrous_systems" : "subcatandbannerlist",
	".shop_by_category.mustang_short_throw_shifters" : "subcatandbannerlist",
	".shop_by_category.mustang_side_scoops" : "subcatandbannerlist",
	".shop_by_category.mustang_springs" : "subcatandbannerlist",
	".shop_by_category.mustang_superchargers" : "subcatandbannerlist",
	".shop_by_category.mustang_suspension" : "subcatandbannerlist",
	".shop_by_category.mustang_throttle_bodies" : "subcatandbannerlist",
	".shop_by_category.mustang_tires" : "subcatandbannerlist",
	".shop_by_category.mustang_top_sellers" : "subcatandbannerlist",
	".shop_by_category.mustang_tuning" : "subcatandbannerlist",
	".shop_by_category.mustang_underdrive_pulleys" : "subcatandbannerlist",
	".shop_by_category.mustang_wheels" : "subcatandbannerlist",
	".stage3camaro.1994-1997_camaro_v6__v8" : "subcatandbannerlist",
	".stage3camaro.1994-1997_camaro_v6__v8.1993-1997_camaro_cold_air_intakes_-_filters__throttle_bodies__etc" : "subcatandbannerlist",
	".stage3camaro.1998-2002_camaro_v6__v8" : "subcatandbannerlist",
	".stage3camaro.1998-2002_camaro_v6__v8.1998-2002_camaro_air___fuel_induction_-_cold_air_intake__manifold__throttle_body" : "subcatandbannerlist",
	".stage3camaro.1998-2002_camaro_v6__v8.1998-2002_camaro_air___fuel_induction_-_cold_air_intake__manifold__throttle_body.camaro_v6_38l" : "subcatandbannerlist",
	".stage3camaro.1998-2002_camaro_v6__v8.1998-2002_camaro_air___fuel_induction_-_cold_air_intake__manifold__throttle_body.camaro_v8_57l_-_ls1" : "subcatandbannerlist",
	".stage3camaro.1998-2002_camaro_v6__v8.1998-2002_camaro_engine_components" : "subcatandbannerlist",
	".stage3camaro.1998-2002_camaro_v6__v8.1998-2002_camaro_exhaust_systems" : "subcatandbannerlist",
	".stage3camaro.1998-2002_camaro_v6__v8.1998-2002_camaro_exhaust_systems.1998-2002_camaro_exhaust_systems_-_v8" : "subcatandbannerlist",
	".stage3camaro.1998-2002_camaro_v6__v8.1998-2002_camaro_exterior_upgrades_hood_bumper_valance" : "subcatandbannerlist",
	".stage3camaro.1998-2002_camaro_v6__v8.1998-2002_camaro_exterior_upgrades_hood_bumper_valance.camaro_v6_38l_lt" : "subcatandbannerlist",
	".stage3camaro.1998-2002_camaro_v6__v8.1998-2002_camaro_exterior_upgrades_hood_bumper_valance.camaro_v8_57l_ss" : "subcatandbannerlist",
	".stage3camaro.1998-2002_camaro_v6__v8.1998-2002_camaro_suspension_kits___parts" : "subcatandbannerlist",
	".stage3camaro.1998-2002_camaro_v6__v8.1998-2002_camaro_suspension_kits___parts.1998-2002_camaro_suspension_kits___parts_-_v6" : "subcatandbannerlist",
	".stage3camaro.2010-2012_camaro_v6__v8" : "subcatandbannerlist",
	".stage3camaro.2010-2012_camaro_v6__v8.2010-2012_camaro_air___fuel_induction_-_cold_air_intake__throttle_body__filter" : "subcatandbannerlist",
	".stage3camaro.2010-2012_camaro_v6__v8.2010-2012_camaro_air___fuel_induction_-_cold_air_intake__throttle_body__filter.2010-12_camaro_air___fuel_induction_v6_36l" : "subcatandbannerlist",
	".stage3camaro.2010-2012_camaro_v6__v8.2010-2012_camaro_air___fuel_induction_-_cold_air_intake__throttle_body__filter.2010-12_camaro_air___fuel_induction_v8_62l_ss" : "subcatandbannerlist",
	".stage3camaro.2010-2012_camaro_v6__v8.2010-2012_camaro_engine_components" : "subcatandbannerlist",
	".stage3camaro.2010-2012_camaro_v6__v8.2010-2012_camaro_exhaust_systems_-_headers" : "subcatandbannerlist",
	".stage3camaro.2010-2012_camaro_v6__v8.2010-2012_camaro_exhaust_systems_-_headers.2010-12_camaro_v6_36l" : "subcatandbannerlist",
	".stage3camaro.2010-2012_camaro_v6__v8.2010-2012_camaro_exhaust_systems_-_headers.2010-12_camaro_v8_62l_ss" : "subcatandbannerlist",
	".stage3camaro.2010-2012_camaro_v6__v8.2010-2012_camaro_exterior_upgrades_-_body_kits__hoods__air_dams__spoilers__fenders__scoops__etc" : "subcatandbannerlist",
	".stage3camaro.2010-2012_camaro_v6__v8.2010-2012_camaro_suspension_kits___parts" : "subcatandbannerlist",
	".stage3camaro.2010-2012_camaro_v6__v8.2010-2012_camaro_suspension_kits___parts.2010-2012_camaro_suspension_kits___parts_-_v6" : "subcatandbannerlist",
	".stage3camaro.2010-2012_camaro_v6__v8.2010-2012_camaro_suspension_kits___parts.2010-2012_camaro_suspension_kits___parts_-_v8" : "subcatandbannerlist",
	".stage3camaro.2010-2012_camaro_v6__v8.2010-2012_camaro_wheels___tires" : "subcatandbannerlist",
	".stage3camaro.shop_by_manufacturer" : "subcatandbannerlist",
	".stage3camaro.shop_camaro_parts_by_category_.camaro_accessories" : "subcatandbannerlist",
	".stage3camaro.shop_camaro_parts_by_category_.camaro_brakes" : "subcatandbannerlist",
	".stage3camaro.shop_camaro_parts_by_category_.camaro_cold_air_intakes" : "subcatandbannerlist",
	".stage3camaro.shop_camaro_parts_by_category_.camaro_driveline_components" : "subcatandbannerlist",
	".stage3camaro.shop_camaro_parts_by_category_.camaro_engine_components" : "subcatandbannerlist",
	".stage3camaro.shop_camaro_parts_by_category_.camaro_exhaust__axle-back_kits" : "subcatandbannerlist",
	".stage3camaro.shop_camaro_parts_by_category_.camaro_exhaust__cat-back_kits" : "subcatandbannerlist",
	".stage3camaro.shop_camaro_parts_by_category_.camaro_exhaust__headers" : "subcatandbannerlist",
	".stage3camaro.shop_camaro_parts_by_category_.camaro_exterior_upgrades" : "subcatandbannerlist",
	".stage3camaro.shop_camaro_parts_by_category_.camaro_programmers___tuners" : "subcatandbannerlist",
	".stage3camaro.shop_camaro_parts_by_category_.camaro_superchargers" : "subcatandbannerlist",
	".stage3camaro.shop_camaro_parts_by_category_.camaro_wheels___tires" : "subcatandbannerlist",
	".customer_satisfaction_guarantee" : "satisfactionGuarantee"
	}



/*
app.vars.scripts is an object containing a list of scripts that are required/desired.
for each script, include:  
	pass -> scripts are loaded in a loop. pass 1 is loaded before app gets initiated and should only include 'required' scripts. Use > 1 for other scripts.
	location -> the location of the file. be sure to load a secure script on secure pages to avoid an ssl error.
	validator -> a function returning true or false if the script is loaded. Used primarily on pass 1.
optionally also include:
	callback -> a function to execute after the script is loaded.
*/
app.vars.scripts = new Array();



app.vars.scripts.push({
	'pass':1,
	'location':app.vars.baseURL+'controller.js',
	'validator':function(){return (typeof zController == 'function') ? true : false;},
	'callback':function(){app.u.initMVC()} //the app.u.initMVC callback is what instantiates the controller.
	})


app.vars.scripts.push({
	'pass':1,
	'location':(document.location.protocol == 'https:' ? 'https:' : 'http:')+'//ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/jquery-ui.js',
	'validator':function(){return (typeof $ == 'function' && jQuery.ui) ? true : false;}
	})
//The config.js file is 'never' local. it's a remote file, so...
//when opening the app locally, always use the nonsecure config file. Makes testing easier.
//when opening the app remotely, use app.vars.baseURL which will be http/https as needed.

app.vars.scripts.push({
	'pass':1,
	'location':(document.location.protocol == 'file:') ? app.vars.httpURL+'jquery/config.js' : app.vars.baseURL+'jquery/config.js',
	'validator':function(){return (typeof zGlobals == 'object') ? true : false;}
	})

app.vars.scripts.push({'pass':1,'location':app.vars.baseURL+'model.js','validator':function(){return (typeof zoovyModel == 'function') ? true : false;}})
app.vars.scripts.push({'pass':1,'location':app.vars.baseURL+'includes.js','validator':function(){return (typeof handlePogs == 'function') ? true : false;}})

app.vars.scripts.push({'pass':1,'location':app.vars.baseURL+'jscrollpane/script/jquery.jscrollpane.min.js','validator':function(){
	app.u.dump("typeof jQuery.jScrollPane:"+typeof jQuery.jScrollPane);
	return (typeof jQuery().jScrollPane == 'undefined') ? false : true;}
	})
	
app.vars.scripts.push({'pass':1,'location':app.vars.baseURL+'jscrollpane/script/jquery.mousewheel.js','validator':function(){
	//not sure how to validate
	return true;}
	})

//used for making text editable (customer address). non-essential. loaded late.
app.vars.scripts.push({'pass':8,'location':app.vars.baseURL+'jeditable.js','validator':function(){return (typeof $ == 'function' && jQuery().editable) ? true : false;}})

/*
Will load all the scripts from pass X where X is an integer less than 10.
This will load all of the scripts in the app.vars.scripts object that have a matching 'pass' value.

*/

app.u.loadScriptsByPass = function(PASS,CONTINUE)	{
//	app.u.dump("BEGIN app.u.loadScriptsByPass ["+PASS+"]");
	var L = app.vars.scripts.length;
	var numIncludes = 0; //what is returned. The total number of includes for this pass.
	for(var i = 0; i < L; i += 1)	{
		if(app.vars.scripts[i].pass == PASS)	{
			numIncludes++
			app.u.loadScript(app.vars.scripts[i].location,app.vars.scripts[i].callback);
			}
		}
	if(CONTINUE == true && PASS <= 10)	{app.u.loadScriptsByPass((PASS + 1),true)}
	return numIncludes;
	}


/*
This function is overwritten once the controller is instantiated. 
Having a placeholder allows us to always reference the same messaging function, but not impede load time with a bulky error function.
*/
app.u.throwMessage = function(m)	{
	alert(m); 
	}


//put any code that you want executed AFTER the app has been initiated in here.  This may include adding onCompletes or onInits for a given template.
app.u.appInitComplete = function()	{
	app.u.loadScriptsByPass(2,true); //loads the rest of the scripts.
	app.u.dump("Executing myAppIsLoaded code...");
//display product blob fields in tabbed format.
	app.ext.myRIA.template.productTemplate.onCompletes.push(function(P) {$( "#tabbedProductContent" ).tabs()}) 
//sample for adding a onInit
	app.ext.myRIA.template.homepageTemplate.onInits.push(function(P) {
		//do something.
		}) //display product blob fields in tabbed format.
		
	app.ext.myRIA.renderFormats.youtubeVideos = function($tag, data){
		var vidIDs = data.value.split("\n");
		for(var i = 0; i< vidIDs.length; i+=1){
			var newData = {value:vidIDs[i]};
			var $thumb = $("<img onClick='app.ext.myRIA.a.showYoutubeInModal(\""+newData.value+"\")' src='blank.gif' />");
			app.ext.myRIA.renderFormats.youtubeThumbnail($thumb, newData);
			
			var $thumbcontainer = $("<div class='lightShadow pointer thumbcontainer'></div>");
			$thumbcontainer.append($("<span onClick='app.ext.myRIA.a.showYoutubeInModal(\""+newData.value+"\")' class='playBtnOverlay'></span>"));
			$thumbcontainer.append($thumb);
			
			$tag.append($thumbcontainer);
		}	
	}
	
	app.ext.myRIA.renderFormats.customBanner = function($tag, data)	{
//				app.u.dump("begin myRIA.renderFormats.banner");
				var obj = app.u.getParametersAsObject(decodeURI(data.value)); //returns an object LINK, ALT and IMG
				var hash; //used to store the href value in hash syntax. ex: #company?show=return
				var pageInfo = {};
				
				
//				app.u.dump(" -> obj.LINK: "+obj.LINK);
				
//if value starts with a #, then most likely the hash syntax is being used.
				if(obj.LINK && obj.LINK.indexOf('#') == 0)	{
					hash = obj.LINK;
					pageInfo = app.ext.myRIA.u.getPageInfoFromHash(hash);
					}
// Initially attempted to do some sort of validating to see if this was likely to be a intra-store link.
//  && data.value.indexOf('/') == -1 || data.value.indexOf('http') == -1 || data.value.indexOf('www') > -1
				else if(obj.LINK)	{
					pageInfo = app.ext.myRIA.u.detectRelevantInfoToPage(obj.LINK);
					if(pageInfo.pageType)	{
						hash = app.ext.myRIA.u.getHashFromPageInfo(pageInfo);
						}
					else	{
						hash = obj.LINK
						}
					}
				else	{
					//obj.link is not set
					}
				if(!app.u.isSet(obj.IMG))	{$tag.remove();} //if the image isn't set, don't show the banner. if a banner is set, then unset, val may = ALT=&IMG=&LINK=
 				else	{
//if we don't have a valid pageInfo object AND a valid hash, then we'll default to what's in the obj.LINK value.
					$tag.attr('alt',obj.ALT);
//if the link isn't set, no href is added. This is better because no 'pointer' is then on the image which isn't linked.
					if(obj.LINK)	{
//						app.u.dump(" -> obj.LINK is set: "+obj.LINK);
						var $li = $("<li class='categoryListItem lightShadow displayNone'></li>");
						var $a = $("<div class='pointer'></div>").addClass('bannerBind');
						if(pageInfo && pageInfo.pageType)	{
							$a.click(function(){
								return showContent('',pageInfo)
								})
							}
							
						$tag.wrap($a);
						$tag.parent().wrap($li);
						}
					data.value = obj.IMG; //this will enable the image itself to be rendered by the default image handler. recycling is good.
					app.renderFormats.imageURL($tag,data);
					$tag.after("<div class='catName white2LGray'>"+obj.ALT+"</div>");
					}
				}
	
	app.ext.myRIA.template.homepageTemplate.onInits.push(function(P) {app.u.showTierOne();})
	app.ext.myRIA.template.categoryTemplate.onInits.push(function(P) {app.u.hideTierOne();})
	app.ext.myRIA.template.categoryTemplateTour.onInits.push(function(P) {app.u.hideTierOne();})
	app.ext.myRIA.template.satisfactionGuarantee.onInits.push(function(P) {app.u.hideTierOne();})
	app.ext.myRIA.template.subcatandbannerlist.onInits.push(function(P) {app.u.hideTierOne();})
	app.ext.myRIA.template.subcatandbannerlist.onCompletes.push(function(P) {
	/*
		In future versions of the app this code will need an ID selector added on.
		All previously loaded versions of a template will remain on the DOM, so a unique
		ID will be generated, and needed for an onCompletes Handler like this.
	*/
		if($(".header1list").children().length == 0)
			$(".header1").remove();
		if($(".header2list").children().length == 0)
			$(".header2").remove();
		if($(".header3list").children().length == 0)
			$(".header3").remove();
	})
	app.ext.myRIA.template.productTemplate.onInits.push(function(P) {app.u.hideTierOne();})
	app.ext.myRIA.template.companyTemplate.onInits.push(function(P) {app.u.hideTierOne();})
	app.ext.myRIA.template.companyTemplate.onCompletes.push(function(P) {
		//setTimeout(function(){alert($("#subscribeFormContainer form").length);}, 3000);
	})
	app.ext.myRIA.template.searchTemplate.onInits.push(function(P) {app.u.hideTierOne();})
	app.ext.myRIA.template.customerTemplate.onInits.push(function(P) {app.u.hideTierOne();})
	app.ext.myRIA.template.checkoutTemplate.onInits.push(function(P) {app.u.hideTierOne();})
	
	app.ext.myRIA.template.productTemplate.onCompletes.push(function(P) {
	
		$("#prodThumbs").children().each(function(){
			//alert($(this).children().attr("src"));
			var attr = $(this).children().attr("src");
			if (typeof attr == 'undefined' || attr == false) {
				$(this).remove();
			}
				
		});
		
		if($(".jscroll").children().length < 3)
			$(".jscroll").removeClass("jscroll");
		$(".jscroll").jScrollPane({autoReinitialise: true, showArrows: true});
	})
	
	
	setTimeout(function() {
		app.renderFunctions.translateSelector('#shippingModal',app.data['profile|default']);
	}, 4000);

	}

//gets executed once controller.js is loaded.
//check dependencies and make sure all other .js files are done, then init controller.
//function will get re-executed if not all the scripts in app.vars.scripts pass 1 are done loading.
//the 'attempts' var is incremented each time the function is executed.

app.u.hideLeftContents = function() {
	if($("#savebig").hasClass("showClass"))
		$("#savebig").removeClass("showClass");
	if($("#headerarrow").hasClass("showClass"))
		$("#headerarrow").removeClass("showClass");
	if($("#leftbanners").hasClass("showClass"))
		$("#leftbanners").removeClass("showClass");
	if(!$("#bottombanners").hasClass("showClass"))
		$("#bottombanners").addClass("showClass");
}

app.u.hideTierOne = function() {
	if($("#leftContents").hasClass("showClass"))
		$("#leftContents").removeClass("showClass");
	if($("#headerarrow").hasClass("showClass"))
		$("#headerarrow").removeClass("showClass");
	if(!$("#bottombanners").hasClass("showClass"))
		$("#bottombanners").addClass("showClass");
	if(!$("#mainContent").hasClass("growClass"))
		$("#mainContent").addClass("growClass");
}

app.u.showLeftContents = function() {
	if(!$("#savebig").hasClass("showClass"))
		$("#savebig").addClass("showClass");
	if(!$("#leftbanners").hasClass("showClass"))
		$("#leftbanners").addClass("showClass");
	if($("#bottombanners").hasClass("showClass"))
		$("#bottombanners").removeClass("showClass");
}

app.u.showTierOne = function() {
	if(!$("#leftContents").hasClass("showClass"))
		$("#leftContents").addClass("showClass");
	if(!$("#headerarrow").hasClass("showClass"))
		$("#headerarrow").addClass("showClass");
	if($("#bottombanners").hasClass("showClass"))
		$("#bottombanners").removeClass("showClass");
	if($("#mainContent").hasClass("growClass"))
		$("#mainContent").removeClass("growClass");
}

app.u.toggleTierOne = function() {
	$("#leftContents").toggleClass("showClass");
	$("#headerarrow").toggleClass("showClass");
	$("#bottombanners").toggleClass("showClass");
	$("#mainContent").toggleClass("growClass");
}


app.u.showPromotionModal = function(){
	var $ele = $('#promoDetails');
	if($ele.length != 0)	{
		$ele.dialog({modal:true,width:600,height:400,autoOpen:false, title:"Risk Free Shopping!"});
		$ele.dialog('open');
	}
	return false;
}

app.u.showShippingModal = function(){
	$('body').scrollTop(0);
	var $ele = $('#shippingModal');
	if($ele.length != 0)	{
		$ele.dialog({modal:true,width:600,height:400,autoOpen:false, title:"Shipping Policy"});
		$ele.dialog('open');
	}
	return false;
}


app.u.initMVC = function(attempts){
//	app.u.dump("app.u.initMVC activated");
	var includesAreDone = true;

//what percentage of completion a single include represents (if 10 includes, each is 10%). subtract 1 just to make sure percentComplete < 100
	var percentPerInclude = Math.round((100 / acScriptsInPass)) - 1;  
	var percentComplete = 0; //used to sum how many includes have successfully loaded.
	
	if(!attempts){attempts = 1} //the number of attempts that have been made to load. allows for error handling
	var L = app.vars.scripts.length
//	app.u.dump(" -> L: "+L+" and attempt: "+attempts);
//don't break out of the loop on the first false. better to loop the whole way through so that the progress bar can go up as quickly as possible.
	for(var i = 0; i < L; i += 1)	{
		if(app.vars.scripts[i].pass == 1 && app.vars.scripts[i].validator()){
			//this file is loaded.
			percentComplete += percentPerInclude;
			}
		else if(app.vars.scripts[i].pass != 1)	{
			//only first pass items are validated for instantiting the controller.
			}
		else	{
			//file not loaded.
			app.u.dump(" -> attempt "+attempts+" waiting on: "+app.vars.scripts[i].location)
			includesAreDone = false;
			}
		}

	$('#appPreViewProgressBar').val(percentComplete);
	$('#appPreViewProgressText').empty().append(percentComplete+"% Complete");
	
	if(includesAreDone == true && jQuery)	{
		$.support.cors = true;  //cross site scripting for non cors sites. will b needed for IE10. IE8 & 9 don't support xss well.
//instantiate controller. handles all logic and communication between model and view.
//passing in app will extend app so all previously declared functions will exist in addition to all the built in functions.
//tmp is a throw away variable. app is what should be used as is referenced within the mvc.
		var tmp = new zController(app);

		//instantiate wiki parser.
		myCreole = new Parse.Simple.Creole();

		}
	else if(attempts > 80)	{
		app.u.dump("WARNING! something went wrong in init.js");
		//this is 10 seconds of trying. something isn't going well.
		$('#appPreView').empty().append("<h2>Uh Oh. Something seems to have gone wrong. </h2><p>Several attempts were made to load the store but some necessary files were not found or could not load. We apologize for the inconvenience. Please try 'refresh' and see if that helps.<br><b>If the error persists, please contact the site administrator</b><br> - dev: see console.</p>");
//throw some debugging at the console to report what didn't load.
		for(var i = 0; i < L; i += 1)	{
			if(app.vars.scripts[i].pass == 1)	{
				app.u.dump(" -> "+app.vars.scripts[i].location+": "+app.vars.scripts[i].validator());
				}
			}
		
		}
	else	{
		setTimeout("app.u.initMVC("+(attempts+1)+")",250);
		}
	}






//start the app.
var acScriptsInPass;
//don't execute script till both jquery AND the dom are ready.
$(document).ready(function(){
	acScriptsInPass = app.u.loadScriptsByPass(1,false)
	});






