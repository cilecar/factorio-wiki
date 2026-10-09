<template>

    <div style="overflow: hidden;" class="container-fluid m-0  p-0 bg-zxc">
        <nav class="navbar navbar-expand navbar-light bg-dark">
            <div class="container-fluid ">
                <router-link to="/" class="navbar-brand text-light">Factorio Wiki</router-link>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-light" href="https://vk.com/i_liberov"> Link</a>
                        </li>
                    </ul>
                    <form class="d-flex "> 
                        <input class="form-control me-2 bg-dark " type="search" placeholder="" aria-label="Search">
                        <button class="btn btn btn-black text-light btn-outline-light" type="submit">Search</button>
                      </form>
                </div>
            </div>
        </nav>
        <div class="container-fluid bg-zxc">
            <div class="row">
                <div class="col-12 p-3">
                    <img class="img-fluid w-100" src="/Factorio-logo.png">
                </div>
            </div>
        </div> 
            <div class="row zxczxc" style="margin-left: 0px; margin-right: 0px;">
                <div class="col">
                    <div class="card shadow h-100 bg-dark">
                        <img class="p-3 img-fluid card-img-top bg-dark" src="/img/logistics.png">
                        <div class="card-body  text-light">
                            <h5 class="card-title">Логистика</h5>
                            <p class="card-text">Хранение, транспортировка, передача ресурсов и тд.</p>
                            <hr>
                            <div class="d-flex justify-content-center">
                                <div class="col">
                                    <p>
                                        <button class="btn btn-secondary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                            Раскрыть все категории
                                        </button>
                                    </p> 
                                    <div class="collapse" id="collapseExample">
                                        <div class="card card-body text-light p-0" style="background-color:#212529; border: 0px;">
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/logistics/Wooden_chest" class="w-100"><img class="img-fluid" src="/logistics/img/Wooden_chest.png"></router-link>
                                                    <router-link to="/logistics/Iron_chest" class="w-100"><img class="img-fluid " src="/logistics/img/Iron_chest.png"></router-link>
                                                    <router-link to="/logistics/Steal_chest" class="w-100"><img class="img-fluid " src="/logistics/img/Steel_chest.png"></router-link>
                                                    <router-link to="/logistics/Storage_tank" class="w-100"><img class="img-fluid " src="/logistics/img/Storage_tank.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/logistics/belt_1"><img class="img-fluid " src="/logistics/img/Transport_belt.png"></router-link>
                                                    <router-link to="/logistics/belt_2"><img class="img-fluid " src="/logistics/img/Fast_transport_belt.png"></router-link>
                                                    <router-link to="/logistics/belt_3"><img class="img-fluid " src="/logistics/img/Express_transport_belt.png"></router-link>
                                                    <router-link to="/logistics/Underground_belt_1"><img class="img-fluid " src="/logistics/img/Underground_belt.png"></router-link>
                                                    <router-link to="/logistics/Underground_belt_2"><img class="img-fluid " src="/logistics/img/Fast_underground_belt.png"></router-link>
                                                    <router-link to="/logistics/Underground_belt_3"><img class="img-fluid " src="/logistics/img/Express_underground_belt.png"></router-link>
                                                    <router-link to="/logistics/Splitter_1"><img class="img-fluid " src="/logistics/img/Splitter.png"></router-link>
                                                    <router-link to="/logistics/Splitter_2"><img class="img-fluid " src="/logistics/img/Fast_splitter.png"></router-link>
                                                    <router-link to="/logistics/Splitter_3"><img class="img-fluid " src="/logistics/img/Express_splitter.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/logistics/Burner_inserter"><img class="img-fluid " src="/logistics/img/Burner_inserter.png"></router-link>
                                                    <router-link to="/logistics/Inserter"><img class="img-fluid " src="/logistics/img/Inserter.png"></router-link>
                                                    <router-link to="/logistics/Long-handed_inserter"><img class="img-fluid " src="/logistics/img/Long-handed_inserter.png"></router-link>
                                                    <router-link to="/logistics/Fast_inserter"><img class="img-fluid " src="/logistics/img/Fast_inserter.png"></router-link>
                                                    <router-link to="/logistics/Filter_inserter"><img class="img-fluid " src="/logistics/img/Filter_inserter.png"></router-link>
                                                    <router-link to="/logistics/Stack_inserter"><img class="img-fluid " src="/logistics/img/Stack_inserter.png"></router-link>
                                                    <router-link to="/logistics/Stack_filter_inserter"><img class="img-fluid " src="/logistics/img/Stack_filter_inserter.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/logistics/Small_electric_pole"><img class="img-fluid " src="/logistics/img/Small_electric_pole.png"></router-link>
                                                    <router-link to="/logistics/Medium_electric_pole"><img class="img-fluid " src="/logistics/img/Medium_electric_pole.png"></router-link>
                                                    <router-link to="/logistics/Big_electric_pole"><img class="img-fluid " src="/logistics/img/Big_electric_pole.png"></router-link>
                                                    <router-link to="/logistics/Substation"><img class="img-fluid " src="/logistics/img/Substation.png"></router-link>
                                                    <router-link to="/logistics/Pipe"><img class="img-fluid " src="/logistics/img/Pipe.png"></router-link>
                                                    <router-link to="/logistics/Pipe_to_ground"><img class="img-fluid " src="/logistics/img/Pipe_to_ground.png"></router-link>
                                                    <router-link to="/logistics/Pump"><img class="img-fluid " src="/logistics/img/Pump.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/logistics/Rail"><img class="img-fluid " src="/logistics/img/Straight_rail.png"></router-link>
                                                    <router-link to="/logistics/Train_stop"><img class="img-fluid " src="/logistics/img/Train_stop.png"></router-link>
                                                    <router-link to="/logistics/Rail_signal"><img class="img-fluid " src="/logistics/img/Rail_signal.png"></router-link>
                                                    <router-link to="/logistics/Rail_chain_signal"><img class="img-fluid " src="/logistics/img/Rail_chain_signal.png"></router-link>
                                                    <router-link to="/logistics/Locomotive"><img class="img-fluid " src="/logistics/img/Locomotive.png"></router-link>
                                                    <router-link to="/logistics/Cargo_wagon"><img class="img-fluid " src="/logistics/img/Cargo_wagon.png"></router-link>
                                                    <router-link to="/logistics/Fluid_wagon"><img class="img-fluid " src="/logistics/img/Fluid_wagon.png"></router-link>
                                                    <router-link to="/logistics/Artillery_wagon"><img class="img-fluid " src="/logistics/img/Artillery_wagon.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/logistics/Car" class="w-100"><img class="img-fluid  " src="/logistics/img/Car.png"></router-link> 
                                                    <router-link to="/logistics/Tank" class="w-100"><img class="img-fluid " src="/logistics/img/Tank.png"></router-link>
                                                    <router-link to="/logistics/Spidertron" class="w-100"><img class="img-fluid " src="/logistics/img/Spidertron.png"></router-link>
                                                    <router-link to="/logistics/Spidertron_remote" class="w-100"><img class="img-fluid " src="/logistics/img/Spidertron_remote.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/logistics/Logistic_robot"><img class="img-fluid " src="/logistics/img/Logistic_robot.png"></router-link>
                                                    <router-link to="/logistics/Construction_robot"><img class="img-fluid " src="/logistics/img/Construction_robot.png"></router-link>
                                                    <router-link to="/logistics/Active_provider_chest"><img class="img-fluid " src="/logistics/img/Active_provider_chest.png"></router-link>
                                                    <router-link to="/logistics/Passive_provider_chest"><img class="img-fluid " src="/logistics/img/Passive_provider_chest.png"></router-link>
                                                    <router-link to="/logistics/Storage_chest"><img class="img-fluid " src="/logistics/img/Storage_chest.png"></router-link>
                                                    <router-link to="/logistics/Buffer_chest"><img class="img-fluid " src="/logistics/img/Buffer_chest.png"></router-link>
                                                    <router-link to="/logistics/Requester_chest"><img class="img-fluid " src="/logistics/img/Requester_chest.png"></router-link>
                                                    <router-link to="/logistics/Roboport"><img class="img-fluid " src="/logistics/img/Roboport.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/logistics/Lamp"><img class="img-fluid " src="/logistics/img/Lamp.png"></router-link>
                                                    <router-link to="/logistics/Red_wire"><img class="img-fluid " src="/logistics/img/Red_wire.png"></router-link>
                                                    <router-link to="/logistics/Green_wire"><img class="img-fluid " src="/logistics/img/Green_wire.png"></router-link>
                                                    <router-link to="/logistics/Arithmetic_combinator"><img class="img-fluid " src="/logistics/img/Arithmetic_combinator.png"></router-link>
                                                    <router-link to="/logistics/Decider_combinator"><img class="img-fluid " src="/logistics/img/Decider_combinator.png"></router-link>
                                                    <router-link to="/logistics/Constant_combinator"><img class="img-fluid " src="/logistics/img/Constant_combinator.png"></router-link>
                                                    <router-link to="/logistics/Power_switch"><img class="img-fluid " src="/logistics/img/Power_switch.png"></router-link>
                                                    <router-link to="/logistics/Programmable_speaker"><img class="img-fluid " src="/logistics/img/Programmable_speaker.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/logistics/Stone_brick"><img class="img-fluid " src="/logistics/img/Stone_brick.png"></router-link>
                                                    <router-link to="/logistics/Concrete"><img class="img-fluid " src="/logistics/img/Concrete.png"></router-link>
                                                    <router-link to="/logistics/Hazard_concrete"><img class="img-fluid " src="/logistics/img/Hazard_concrete.png"></router-link>
                                                    <router-link to="/logistics/Refined_concrete"><img class="img-fluid " src="/logistics/img/Refined_concrete.png"></router-link>
                                                    <router-link to="/logistics/Refined_hazard_concrete"><img class="img-fluid " src="/logistics/img/Refined_hazard_concrete.png"></router-link>
                                                    <router-link to="/logistics/Landfill"><img class="img-fluid " src="/logistics/img/Landfill.png"></router-link>
                                                    <router-link to="/logistics/Cliff_explosives"><img class="img-fluid " src="/logistics/img/Cliff_explosives.png"></router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow h-100 bg-dark">
                        <img class="p-3 img-fluid card-img-top bg-dark" src="/img/production.png">
                        <div class="card-body  text-light">
                            <h5 class="card-title">Производство</h5>
                            <p class="card-text">Электроэнергия, буровые установки, печи, модули и тд.</p>
                            <hr>
                            <div class="d-flex justify-content-center">
                                <div class="col">
                                    <p>
                                        <button class="btn btn-secondary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                            Раскрыть все категории
                                        </button>
                                    </p> 
                                    <div class="collapse" id="collapseExample">
                                        <div class="card card-body text-light p-0" style="background-color:#212529; border: 0px;">
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/production/Repair_pack"><img class="img-fluid " src="/production/img/Repair_pack.png"></router-link>
                                                    <router-link to="/production/Blueprint"><img class="img-fluid " src="/production/img/Blueprint.png"></router-link>
                                                    <router-link to="/production/Deconstruction_planner"><img class="img-fluid " src="/production/img/Deconstruction_planner.png"></router-link>
                                                    <router-link to="/production/Upgrade_planner"><img class="img-fluid " src="/production/img/Upgrade_planner.png"></router-link>
                                                    <router-link to="/production/Blueprint_book"><img class="img-fluid " src="/production/img/Blueprint_book.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/production/Boiler"><img class="img-fluid " src="/production/img/Boiler.png"></router-link>
                                                    <router-link to="/production/Steam_engine"><img class="img-fluid " src="/production/img/Steam_engine.png"></router-link>
                                                    <a href="/production/Solar_panel.hmtl"><img class="img-fluid " src="/production/img/Solar_panel.png"></a>
                                                    <router-link to="/production/Accumulator"><img class="img-fluid " src="/production/img/Accumulator.png"></router-link>
                                                    <router-link to="/production/Nuclear_reactor"><img class="img-fluid " src="/production/img/Nuclear_reactor.png"></router-link>
                                                    <router-link to="/production/Heat_pipe"><img class="img-fluid " src="/production/img/Heat_pipe.png"></router-link>
                                                    <router-link to="/production/Heat_exchanger"><img class="img-fluid " src="/production/img/Heat_exchanger.png"></router-link>
                                                    <router-link to="/production/Steam_turbine"><img class="img-fluid " src="/production/img/Steam_turbine.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/production/Burner_mining_drill"><img class="img-fluid " src="/production/img/Burner_mining_drill.png"></router-link>
                                                    <router-link to="/production/Electric_mining_drill"><img class="img-fluid " src="/production/img/Electric_mining_drill.png"></router-link>
                                                    <router-link to="/production/Offshore_pump"><img class="img-fluid " src="/production/img/Offshore_pump.png"></router-link>
                                                    <router-link to="/production/Pumpjack"><img class="img-fluid " src="/production/img/Pumpjack.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/production/Stone_furnace"><img class="img-fluid " src="/production/img/Stone_furnace.png"></router-link>
                                                    <router-link to="/production/Steel_furnace"><img class="img-fluid " src="/production/img/Steel_furnace.png"></router-link>
                                                    <router-link to="/production/Electric_furnace"><img class="img-fluid " src="/production/img/Electric_furnace.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/production/Assembling_machine_1"><img class="img-fluid " src="/production/img/Assembling_machine_1.png"></router-link>
                                                    <router-link to="/production/Assembling_machine_2"><img class="img-fluid " src="/production/img/Assembling_machine_2.png"></router-link>
                                                    <router-link to="/production/Assembling_machine_3"><img class="img-fluid " src="/production/img/Assembling_machine_3.png"></router-link>
                                                    <router-link to="/production/Oil_refinery"><img class="img-fluid " src="/production/img/Oil_refinery.png"></router-link>
                                                    <router-link to="/production/Chemical_plant"><img class="img-fluid " src="/production/img/Chemical_plant.png"></router-link>
                                                    <router-link to="/production/Centrifuge"><img class="img-fluid " src="/production/img/Centrifuge.png"></router-link>
                                                    <router-link to="/production/Lab"><img class="img-fluid " src="/production/img/Lab.png"></router-link>
                                                    <router-link to="/production/Beacon"><img class="img-fluid " src="/production/img/Beacon.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/production/Speed_module"><img class="img-fluid " src="/production/img/Speed_module.png"></router-link>
                                                    <router-link to="/production/Speed_module_2"><img class="img-fluid " src="/production/img/Speed_module_2.png"></router-link>
                                                    <router-link to="/production/Speed_module_3"><img class="img-fluid " src="/production/img/Speed_module_3.png"></router-link>
                                                    <router-link to="/production/Efficiency_module"><img class="img-fluid " src="/production/img/Efficiency_module.png"></router-link>
                                                    <router-link to="/production/Efficiency_module_2"><img class="img-fluid " src="/production/img/Efficiency_module_2.png"></router-link>
                                                    <router-link to="/production/Efficiency_module_3"><img class="img-fluid " src="/production/img/Efficiency_module_3.png"></router-link>
                                                    <router-link to="/production/Productivity_module"><img class="img-fluid " src="/production/img/Productivity_module.png"></router-link>
                                                    <router-link to="/production/Productivity_module_2"><img class="img-fluid " src="/production/img/Productivity_module_2.png"></router-link>
                                                    <router-link to="/production/Productivity_module_3"><img class="img-fluid " src="/production/img/Productivity_module_3.png"></router-link>
                                                    <router-link to="/production/Rocket_silo"><img class="img-fluid " src="/production/img/Rocket_silo.png"></router-link>
                                                    <router-link to="/production/Satellite"><img class="img-fluid " src="/production/img/Satellite.png"></router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow h-100 bg-dark">
                        <img class="p-3 img-fluid card-img-top bg-dark" src="/img/components.png">
                        <div class="card-body  text-light">
                            <h5 class="card-title">Компоненты</h5>
                            <p class="card-text">Жидкости, исследовательские пакеты, схемы и тд.</p>
                            <hr>
                            <div class="d-flex justify-content-center">
                                <div class="col">
                                    <p>
                                        <button class="btn btn-secondary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                            Раскрыть все категории
                                        </button>
                                    </p> 
                                    <div class="collapse" id="collapseExample">
                                        <div class="card card-body text-light p-0" style="background-color:#212529; border: 0px;">
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <a href="/components/c"><img class="img-fluid " src="/components/img/Crude_oil.png"></a>
                                                    <router-link to="/components/Crude_oil"><img class="img-fluid " src="/components/img/Heavy_oil.png"></router-link>
                                                    <router-link to="/components/Light_oil"><img class="img-fluid " src="/components/img/Light_oil.png"></router-link>
                                                    <router-link to="/components/Lubricant"><img class="img-fluid " src="/components/img/Lubricant.png"></router-link>
                                                    <router-link to="/components/Petroleum_gas"><img class="img-fluid " src="/components/img/Petroleum_gas.png"></router-link>
                                                    <router-link to="/components/Sulfuric_acid"><img class="img-fluid " src="/components/img/Sulfuric_acid.png"></router-link>
                                                    <router-link to="/components/Water"><img class="img-fluid " src="/components/img/Water.png"></router-link>
                                                    <router-link to="/components/Steam"><img class="img-fluid " src="/components/img/Steam.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/components/Wood"><img class="img-fluid " src="/components/img/Wood.png"></router-link>
                                                    <router-link to="/components/Coal"><img class="img-fluid " src="/components/img/Coal.png"></router-link>
                                                    <router-link to="/components/Stone"><img class="img-fluid " src="/components/img/Stone.png"></router-link>
                                                    <router-link to="/components/Iron_ore"><img class="img-fluid " src="/components/img/Iron_ore.png"></router-link>
                                                    <router-link to="/components/Copper_ore"><img class="img-fluid " src="/components/img/Copper_ore.png"></router-link>
                                                    <router-link to="/components/Uranium_ore"><img class="img-fluid " src="/components/img/Uranium_ore.png"></router-link>
                                                    <router-link to="/components/Raw_fish"><img class="img-fluid " src="/components/img/Raw_fish.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/components/Iron_plate"><img class="img-fluid " src="/components/img/Iron_plate.png"></router-link>
                                                    <router-link to="/components/Copper_plate"><img class="img-fluid " src="/components/img/Copper_plate.png"></router-link>
                                                    <router-link to="/components/Solid_fuel"><img class="img-fluid " src="/components/img/Solid_fuel.png"></router-link>
                                                    <router-link to="/components/Steel_plate"><img class="img-fluid " src="/components/img/Steel_plate.png"></router-link>
                                                    <router-link to="/components/Plastic_bar"><img class="img-fluid " src="/components/img/Plastic_bar.png"></router-link>
                                                    <router-link to="/components/Sulfur"><img class="img-fluid " src="/components/img/Sulfur.png"></router-link>
                                                    <router-link to="/components/Battery"><img class="img-fluid " src="/components/img/Battery.png"></router-link>
                                                    <router-link to="/components/Explosives"><img class="img-fluid " src="/components/img/Explosives.png"></router-link>
                                                    <router-link to="/components/Uranium_processing"><img class="img-fluid " src="/components/img/Uranium_processing.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/components/Crude_oil_barrel"><img class="img-fluid " src="/components/img/Crude_oil_barrel.png"></router-link>
                                                    <router-link to="/components/Heavy_oil_barrel"><img class="img-fluid " src="/components/img/Heavy_oil_barrel.png"></router-link>
                                                    <router-link to="/components/Light_oil_barrel"><img class="img-fluid " src="/components/img/Light_oil_barrel.png"></router-link>
                                                    <router-link to="/components/Lubricant_barrel"><img class="img-fluid " src="/components/img/Lubricant_barrel.png"></router-link>
                                                    <router-link to="/components/Petroleum_gas_barrel"><img class="img-fluid " src="/components/img/Petroleum_gas_barrel.png"></router-link>
                                                    <router-link to="/components/Sulfuric_acid_barrel"><img class="img-fluid " src="/components/img/Sulfuric_acid_barrel.png"></router-link>
                                                    <router-link to="/components/Water_barrel"><img class="img-fluid " src="/components/img/Water_barrel.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/components/Copper_cable"><img class="img-fluid " src="/components/img/Copper_cable.png"></router-link>
                                                    <router-link to="/components/Iron_stick"><img class="img-fluid " src="/components/img/Iron_stick.png"></router-link>
                                                    <router-link to="/components/Iron_gear_wheel"><img class="img-fluid " src="/components/img/Iron_gear_wheel.png"></router-link>
                                                    <router-link to="/components/Barrel"><img class="img-fluid " src="/components/img/Empty_barrel.png"></router-link>
                                                    <router-link to="/components/Electronic_circuit"><img class="img-fluid " src="/components/img/Electronic_circuit.png"></router-link>
                                                    <router-link to="/components/Advanced_circuit"><img class="img-fluid " src="/components/img/Advanced_circuit.png"></router-link>
                                                    <router-link to="/components/Processing_unit"><img class="img-fluid " src="/components/img/Processing_unit.png"></router-link>
                                                    <router-link to="/components/Engine_unit"><img class="img-fluid " src="/components/img/Engine_unit.png"></router-link>
                                                    <router-link to="/components/Electric_engine_unit"><img class="img-fluid " src="/components/img/Electric_engine_unit.png"></router-link>
                                                    <router-link to="/components/Flying_robot_frame"><img class="img-fluid " src="/components/img/Flying_robot_frame.png"></router-link>
                                                    <router-link to="/components/Rocket_part"><img class="img-fluid " src="/components/img/Rocket_part.png"></router-link>
                                                    <router-link to="/components/Rocket_control_unit"><img class="img-fluid " src="/components/img/Rocket_control_unit.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/components/Low_density_structure"><img class="img-fluid " src="/components/img/Low_density_structure.png"></router-link>
                                                    <router-link to="/components/Rocket_fuel"><img class="img-fluid " src="/components/img/Rocket_fuel.png"></router-link>
                                                    <router-link to="/components/Nuclear_fuel"><img class="img-fluid " src="/components/img/Nuclear_fuel.png"></router-link>
                                                    <router-link to="/components/Uranium-235"><img class="img-fluid " src="/components/img/Uranium-235.png"></router-link>
                                                    <router-link to="/components/Uranium-238"><img class="img-fluid " src="/components/img/Uranium-238.png"></router-link>
                                                    <router-link to="/components/Uranium_fuel_cell"><img class="img-fluid " src="/components/img/Uranium_fuel_cell.png"></router-link>
                                                    <router-link to="/components/Nuclear_fuel_reprocessing"><img class="img-fluid " src="/components/img/Nuclear_fuel_reprocessing.png"></router-link>
                                                    <router-link to="/components/Kovarex_enrichment_process"><img class="img-fluid " src="/components/img/Kovarex_enrichment_process.png"></router-link>
                                                    <router-link to="/components/Used_up_uranium_fuel_cell"><img class="img-fluid " src="/components/img/Used_up_uranium_fuel_cell.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/components/Automation_science_pack"><img class="img-fluid " src="/components/img/Automation_science_pack.png"></router-link>
                                                    <router-link to="/components/Logistic_science_pack"><img class="img-fluid " src="/components/img/Logistic_science_pack.png"></router-link>
                                                    <router-link to="/components/Military_science_pack"><img class="img-fluid " src="/components/img/Military_science_pack.png"></router-link>
                                                    <router-link to="/components/Chemical_science_pack"><img class="img-fluid " src="/components/img/Chemical_science_pack.png"></router-link>
                                                    <router-link to="/components/Production_science_pack"><img class="img-fluid " src="/components/img/Production_science_pack.png"></router-link>
                                                    <router-link to="/components/Utility_science_pack"><img class="img-fluid " src="/components/img/Utility_science_pack.png"></router-link>
                                                    <router-link to="/components/Space_science_pack"><img class="img-fluid " src="/components/img/Space_science_pack.png"></router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow h-100 bg-dark">
                        <img class="p-3 img-fluid card-img-top bg-dark" src="/img/military industry.png">
                        <div class="card-body  text-light">
                            <h5 class="card-title">Военная промышленность</h5>
                            <p class="card-text">Оружие, патроны, ракеты, дроны, броня, турели и тд.</p>
                            <hr>
                            <div class="d-flex justify-content-center">
                                <div class="col">
                                    <p>
                                        <button class="btn btn-secondary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                            Раскрыть все категории
                                        </button>
                                    </p> 
                                    <div class="collapse" id="collapseExample">
                                        <div class="card card-body text-light p-0" style="background-color:#212529; border: 0px;">
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/military_industry/Pistol" class="w-100"><img class="img-fluid " src="/military_industry/img/Pistol.png"></router-link>
                                                    <router-link to="/military_industry/Submachine_gun" class="w-100"><img class="img-fluid " src="/military_industry/img/Submachine_gun.png"></router-link>
                                                    <router-link to="/military_industry/Shotgun" class="w-100"><img class="img-fluid " src="/military_industry/img/Shotgun.png"></router-link>
                                                    <router-link to="/military_industry/Combat_shotgun" class="w-100"><img class="img-fluid " src="/military_industry/img/Combat_shotgun.png"></router-link>
                                                    <router-link to="/military_industry/Rocket_launcher" class="w-100"><img class="img-fluid " src="/military_industry/img/Rocket_launcher.png"></router-link>
                                                    <router-link to="/military_industry/Flamethrower" class="w-100"><img class="img-fluid " src="/military_industry/img/Flamethrower.png"></router-link>
                                                    <router-link to="/military_industry/Land_mine" class="w-100"><img class="img-fluid " src="/military_industry/img/Land_mine.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/military_industry/Firearm_magazine" class="w-100"><img class="img-fluid " src="/military_industry/img/Firearm_magazine.png"></router-link>
                                                    <router-link to="/military_industry/Piercing_rounds_magazine" class="w-100"><img class="img-fluid " src="/military_industry/img/Piercing_rounds_magazine.png"></router-link>
                                                    <router-link to="/military_industry/Uranium_rounds_magazine" class="w-100"><img class="img-fluid " src="/military_industry/img/Uranium_rounds_magazine.png"></router-link>
                                                    <router-link to="/military_industry/Shotgun_shells" class="w-100"><img class="img-fluid " src="/military_industry/img/Shotgun_shells.png"></router-link>
                                                    <router-link to="/military_industry/Piercing_shotgun_shells" class="w-100"><img class="img-fluid " src="/military_industry/img/Piercing_shotgun_shells.png"></router-link>
                                                    <router-link to="/military_industry/Cannon_shell" class="w-100"><img class="img-fluid " src="/military_industry/img/Cannon_shell.png"></router-link>
                                                    <router-link to="/military_industry/Explosive_cannon_shell" class="w-100"><img class="img-fluid " src="/military_industry/img/Explosive_cannon_shell.png"></router-link>
                                                    <router-link to="/military_industry/Uranium_cannon_shell" class="w-100"><img class="img-fluid " src="/military_industry/img/Uranium_cannon_shell.png"></router-link>
                                                    <router-link to="/military_industry/Explosive_uranium_cannon_shell" class="w-100"><img class="img-fluid " src="/military_industry/img/Explosive_uranium_cannon_shell.png"></router-link>
                                                    <router-link to="/military_industry/Artillery_shell" class="w-100"><img class="img-fluid " src="/military_industry/img/Artillery_shell.png"></router-link>
                                                    <router-link to="/military_industry/Rocket" class="w-100"><img class="img-fluid " src="/military_industry/img/Rocket.png"></router-link>
                                                    <router-link to="/military_industry/Explosive_rocket" class="w-100"><img class="img-fluid " src="/military_industry/img/Explosive_rocket.png"></router-link>
                                                    <router-link to="/military_industry/Atomic_bomb" class="w-100"><img class="img-fluid " src="/military_industry/img/Atomic_bomb.png"></router-link>
                                                    <router-link to="/military_industry/Flamethrower_ammo" class="w-100"><img class="img-fluid " src="/military_industry/img/Flamethrower_ammo.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/military_industry/Grenade" class="w-100"><img class="img-fluid " src="/military_industry/img/Grenade.png"></router-link>
                                                    <router-link to="/military_industry/Cluster_grenade" class="w-100"><img class="img-fluid " src="/military_industry/img/Cluster_grenade.png"></router-link>
                                                    <router-link to="/military_industry/Poison_capsule" class="w-100"><img class="img-fluid " src="/military_industry/img/Poison_capsule.png"></router-link>
                                                    <router-link to="/military_industry/Slowdown_capsule" class="w-100"><img class="img-fluid " src="/military_industry/img/Slowdown_capsule.png"></router-link>
                                                    <router-link to="/military_industry/Defender_capsule" class="w-100"><img class="img-fluid " src="/military_industry/img/Defender_capsule.png"></router-link>
                                                    <router-link to="/military_industry/Distractor_capsule" class="w-100"><img class="img-fluid " src="/military_industry/img/Distractor_capsule.png"></router-link>
                                                    <router-link to="/military_industry/Destroyer_capsule" class="w-100"><img class="img-fluid " src="/military_industry/img/Destroyer_capsule.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/military_industry/Light_armor" class="w-100"><img class="img-fluid " src="/military_industry/img/Light_armor.png"></router-link>
                                                    <router-link to="/military_industry/Heavy_armor" class="w-100"><img class="img-fluid " src="/military_industry/img/Heavy_armor.png"></router-link>
                                                    <router-link to="/military_industry/Modular_armor" class="w-100"><img class="img-fluid " src="/military_industry/img/Modular_armor.png"></router-link>
                                                    <router-link to="/military_industry/Power_armor" class="w-100"><img class="img-fluid " src="/military_industry/img/Power_armor.png"></router-link>
                                                    <router-link to="/military_industry/Power_armor_MK2" class="w-100"><img class="img-fluid " src="/military_industry/img/Power_armor_MK2.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/military_industry/Portable_solar_panel" class="w-100"><img class="img-fluid " src="/military_industry/img/Portable_solar_panel.png"></router-link>
                                                    <router-link to="/military_industry/Portable_fusion_reactor" class="w-100"><img class="img-fluid " src="/military_industry/img/Portable_fusion_reactor.png"></router-link>
                                                    <router-link to="/military_industry/Personal_battery" class="w-100"><img class="img-fluid " src="/military_industry/img/Personal_battery.png"></router-link>
                                                    <router-link to="/military_industry/Personal_battery_MK2" class="w-100"><img class="img-fluid " src="/military_industry/img/Personal_battery_MK2.png"></router-link>
                                                    <router-link to="/military_industry/Belt_immunity_equipment" class="w-100"><img class="img-fluid " src="/military_industry/img/Belt_immunity_equipment.png"></router-link>
                                                    <router-link to="/military_industry/Exoskeleton" class="w-100"><img class="img-fluid " src="/military_industry/img/Exoskeleton.png"></router-link>
                                                    <router-link to="/military_industry/Personal_roboport" class="w-100"><img class="img-fluid " src="/military_industry/img/Personal_roboport.png"></router-link>
                                                    <router-link to="/military_industry/Personal_roboport_MK2" class="w-100"><img class="img-fluid " src="/military_industry/img/Personal_roboport_MK2.png"></router-link>
                                                    <router-link to="/military_industry/Nightvision" class="w-100"><img class="img-fluid " src="/military_industry/img/Nightvision.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/military_industry/Energy_shield" class="w-100"><img class="img-fluid " src="/military_industry/img/Energy_shield.png"></router-link>
                                                    <router-link to="/military_industry/Energy_shield_MK2" class="w-100"><img class="img-fluid " src="/military_industry/img/Energy_shield_MK2.png"></router-link>
                                                    <router-link to="/military_industry/Personal_laser_defense" class="w-100"><img class="img-fluid " src="/military_industry/img/Personal_laser_defense.png"></router-link>
                                                    <router-link to="/military_industry/Discharge_defense" class="w-100"><img class="img-fluid " src="/military_industry/img/Discharge_defense.png"></router-link>
                                                    <router-link to="/military_industry/Discharge_defense_remote" class="w-100"><img class="img-fluid " src="/military_industry/img/Discharge_defense_remote.png"></router-link>
                                                </div>
                                            </div>
                                            <div class="row-justify-content-start align-items-start">
                                                <div class="p-0 m-1">
                                                    <router-link to="/military_industry/Wall" class="w-100"><img class="img-fluid " src="/military_industry/img/Wall.png"></router-link>
                                                    <router-link to="/military_industry/Gate" class="w-100"><img class="img-fluid " src="/military_industry/img/Gate.png"></router-link>
                                                    <router-link to="/military_industry/Gun_turret" class="w-100"><img class="img-fluid " src="/military_industry/img/Gun_turret.png"></router-link>
                                                    <router-link to="/military_industry/Laser_turret" class="w-100"><img class="img-fluid " src="/military_industry/img/Laser_turret.png"></router-link>
                                                    <router-link to="/military_industry/Flamethrower_turret" class="w-100"><img class="img-fluid " src="/military_industry/img/Flamethrower_turret.png"></router-link>
                                                    <router-link to="/military_industry/Artillery_turret" class="w-100"><img class="img-fluid " src="/military_industry/img/Artillery_turret.png"></router-link>
                                                    <router-link to="/military_industry/Artillery_targeting_remote" class="w-100"><img class="img-fluid " src="/military_industry/img/Artillery_targeting_remote.png"></router-link>
                                                    <router-link to="/military_industry/Radar" class="w-100"><img class="img-fluid " src="/military_industry/img/Radar.png"></router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    


Process Group PGID: 1040618
Process Group PGID: 1041353

</template>

<script setup>
</script>
<style scoped>
</style>
