'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">googlelogin documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ActividadPageModule.html" data-type="entity-link">ActividadPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ActividadPageModule-33256d65c07c6a6eebf3a302d8f72f58"' : 'data-target="#xs-components-links-module-ActividadPageModule-33256d65c07c6a6eebf3a302d8f72f58"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ActividadPageModule-33256d65c07c6a6eebf3a302d8f72f58"' :
                                            'id="xs-components-links-module-ActividadPageModule-33256d65c07c6a6eebf3a302d8f72f58"' }>
                                            <li class="link">
                                                <a href="components/ActividadPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActividadPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ActividadPageRoutingModule.html" data-type="entity-link">ActividadPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AlimentosEditarPageModule.html" data-type="entity-link">AlimentosEditarPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AlimentosEditarPageModule-70d9ae62d574d981ef74a6f44103fba2"' : 'data-target="#xs-components-links-module-AlimentosEditarPageModule-70d9ae62d574d981ef74a6f44103fba2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlimentosEditarPageModule-70d9ae62d574d981ef74a6f44103fba2"' :
                                            'id="xs-components-links-module-AlimentosEditarPageModule-70d9ae62d574d981ef74a6f44103fba2"' }>
                                            <li class="link">
                                                <a href="components/AlimentosEditarPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlimentosEditarPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AlimentosEditarPageRoutingModule.html" data-type="entity-link">AlimentosEditarPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AlimentosNoLikePageModule.html" data-type="entity-link">AlimentosNoLikePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AlimentosNoLikePageModule-e381ea3a1ab508eb375702f911423648"' : 'data-target="#xs-components-links-module-AlimentosNoLikePageModule-e381ea3a1ab508eb375702f911423648"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlimentosNoLikePageModule-e381ea3a1ab508eb375702f911423648"' :
                                            'id="xs-components-links-module-AlimentosNoLikePageModule-e381ea3a1ab508eb375702f911423648"' }>
                                            <li class="link">
                                                <a href="components/AlimentosNoLikePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlimentosNoLikePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AlimentosNoLikePageRoutingModule.html" data-type="entity-link">AlimentosNoLikePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AlimentosSeleccionPageModule.html" data-type="entity-link">AlimentosSeleccionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AlimentosSeleccionPageModule-90793c97cd5191014d803149be191dd7"' : 'data-target="#xs-components-links-module-AlimentosSeleccionPageModule-90793c97cd5191014d803149be191dd7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlimentosSeleccionPageModule-90793c97cd5191014d803149be191dd7"' :
                                            'id="xs-components-links-module-AlimentosSeleccionPageModule-90793c97cd5191014d803149be191dd7"' }>
                                            <li class="link">
                                                <a href="components/AlimentosSeleccionPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlimentosSeleccionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AlimentosSeleccionPageRoutingModule.html" data-type="entity-link">AlimentosSeleccionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AntecedentefamiliarPageModule.html" data-type="entity-link">AntecedentefamiliarPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AntecedentefamiliarPageModule-5abe32853e15cda09d4d9a365eb6bb10"' : 'data-target="#xs-components-links-module-AntecedentefamiliarPageModule-5abe32853e15cda09d4d9a365eb6bb10"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AntecedentefamiliarPageModule-5abe32853e15cda09d4d9a365eb6bb10"' :
                                            'id="xs-components-links-module-AntecedentefamiliarPageModule-5abe32853e15cda09d4d9a365eb6bb10"' }>
                                            <li class="link">
                                                <a href="components/AntecedentefamiliarPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AntecedentefamiliarPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AntecedentefamiliarPageRoutingModule.html" data-type="entity-link">AntecedentefamiliarPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2441883f6aca35b78f2db17efae01009"' : 'data-target="#xs-components-links-module-AppModule-2441883f6aca35b78f2db17efae01009"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2441883f6aca35b78f2db17efae01009"' :
                                            'id="xs-components-links-module-AppModule-2441883f6aca35b78f2db17efae01009"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-2441883f6aca35b78f2db17efae01009"' : 'data-target="#xs-directives-links-module-AppModule-2441883f6aca35b78f2db17efae01009"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-2441883f6aca35b78f2db17efae01009"' :
                                        'id="xs-directives-links-module-AppModule-2441883f6aca35b78f2db17efae01009"' }>
                                        <li class="link">
                                            <a href="directives/TwoDigitDecimaNumberDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">TwoDigitDecimaNumberDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BateriaAlimentoPageModule.html" data-type="entity-link">BateriaAlimentoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BateriaAlimentoPageModule-fba5dbeafc492f0c585727a2194612f9"' : 'data-target="#xs-components-links-module-BateriaAlimentoPageModule-fba5dbeafc492f0c585727a2194612f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BateriaAlimentoPageModule-fba5dbeafc492f0c585727a2194612f9"' :
                                            'id="xs-components-links-module-BateriaAlimentoPageModule-fba5dbeafc492f0c585727a2194612f9"' }>
                                            <li class="link">
                                                <a href="components/BateriaAlimentoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BateriaAlimentoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BateriaAlimentoPageRoutingModule.html" data-type="entity-link">BateriaAlimentoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BateriacalentamientoesperahomePageModule.html" data-type="entity-link">BateriacalentamientoesperahomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BateriacalentamientoesperahomePageModule-66b576ca1dc0cef7dcbc95360c567b1d"' : 'data-target="#xs-components-links-module-BateriacalentamientoesperahomePageModule-66b576ca1dc0cef7dcbc95360c567b1d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BateriacalentamientoesperahomePageModule-66b576ca1dc0cef7dcbc95360c567b1d"' :
                                            'id="xs-components-links-module-BateriacalentamientoesperahomePageModule-66b576ca1dc0cef7dcbc95360c567b1d"' }>
                                            <li class="link">
                                                <a href="components/BateriacalentamientoesperahomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BateriacalentamientoesperahomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BateriacalentamientoesperahomePageRoutingModule.html" data-type="entity-link">BateriacalentamientoesperahomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BateriacalentamientofinalizarPageModule.html" data-type="entity-link">BateriacalentamientofinalizarPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BateriacalentamientofinalizarPageModule-76094af0a022a7af1ab576fc34209fc2"' : 'data-target="#xs-components-links-module-BateriacalentamientofinalizarPageModule-76094af0a022a7af1ab576fc34209fc2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BateriacalentamientofinalizarPageModule-76094af0a022a7af1ab576fc34209fc2"' :
                                            'id="xs-components-links-module-BateriacalentamientofinalizarPageModule-76094af0a022a7af1ab576fc34209fc2"' }>
                                            <li class="link">
                                                <a href="components/BateriacalentamientofinalizarPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BateriacalentamientofinalizarPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BateriacalentamientofinalizarPageRoutingModule.html" data-type="entity-link">BateriacalentamientofinalizarPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BateriacalentamientohomePageModule.html" data-type="entity-link">BateriacalentamientohomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BateriacalentamientohomePageModule-e336ad6627c17d80f56451b33c36a0b6"' : 'data-target="#xs-components-links-module-BateriacalentamientohomePageModule-e336ad6627c17d80f56451b33c36a0b6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BateriacalentamientohomePageModule-e336ad6627c17d80f56451b33c36a0b6"' :
                                            'id="xs-components-links-module-BateriacalentamientohomePageModule-e336ad6627c17d80f56451b33c36a0b6"' }>
                                            <li class="link">
                                                <a href="components/BateriacalentamientohomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BateriacalentamientohomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BateriacalentamientohomePageRoutingModule.html" data-type="entity-link">BateriacalentamientohomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BateriaesperahomePageModule.html" data-type="entity-link">BateriaesperahomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BateriaesperahomePageModule-a6bd9334d90ff1235e9893389629fc8f"' : 'data-target="#xs-components-links-module-BateriaesperahomePageModule-a6bd9334d90ff1235e9893389629fc8f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BateriaesperahomePageModule-a6bd9334d90ff1235e9893389629fc8f"' :
                                            'id="xs-components-links-module-BateriaesperahomePageModule-a6bd9334d90ff1235e9893389629fc8f"' }>
                                            <li class="link">
                                                <a href="components/BateriaesperahomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BateriaesperahomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BateriaesperahomePageRoutingModule.html" data-type="entity-link">BateriaesperahomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BateriaEstiramientosPageModule.html" data-type="entity-link">BateriaEstiramientosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BateriaEstiramientosPageModule-803aec0acf07bb655a2718577b409238"' : 'data-target="#xs-components-links-module-BateriaEstiramientosPageModule-803aec0acf07bb655a2718577b409238"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BateriaEstiramientosPageModule-803aec0acf07bb655a2718577b409238"' :
                                            'id="xs-components-links-module-BateriaEstiramientosPageModule-803aec0acf07bb655a2718577b409238"' }>
                                            <li class="link">
                                                <a href="components/BateriaEstiramientosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BateriaEstiramientosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BateriaEstiramientosPageRoutingModule.html" data-type="entity-link">BateriaEstiramientosPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BateriahomePageModule.html" data-type="entity-link">BateriahomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BateriahomePageModule-5a952490d16694b2c104fa607feef71e"' : 'data-target="#xs-components-links-module-BateriahomePageModule-5a952490d16694b2c104fa607feef71e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BateriahomePageModule-5a952490d16694b2c104fa607feef71e"' :
                                            'id="xs-components-links-module-BateriahomePageModule-5a952490d16694b2c104fa607feef71e"' }>
                                            <li class="link">
                                                <a href="components/BateriahomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BateriahomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BateriahomePageRoutingModule.html" data-type="entity-link">BateriahomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BateriaPageModule.html" data-type="entity-link">BateriaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BateriaPageModule-d85e229069bba0afef4717e221d30cef"' : 'data-target="#xs-components-links-module-BateriaPageModule-d85e229069bba0afef4717e221d30cef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BateriaPageModule-d85e229069bba0afef4717e221d30cef"' :
                                            'id="xs-components-links-module-BateriaPageModule-d85e229069bba0afef4717e221d30cef"' }>
                                            <li class="link">
                                                <a href="components/BateriaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BateriaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BateriaPageRoutingModule.html" data-type="entity-link">BateriaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BateriaRemplazoPageModule.html" data-type="entity-link">BateriaRemplazoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BateriaRemplazoPageModule-437590c7af92e7c9c452a08c5af63331"' : 'data-target="#xs-components-links-module-BateriaRemplazoPageModule-437590c7af92e7c9c452a08c5af63331"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BateriaRemplazoPageModule-437590c7af92e7c9c452a08c5af63331"' :
                                            'id="xs-components-links-module-BateriaRemplazoPageModule-437590c7af92e7c9c452a08c5af63331"' }>
                                            <li class="link">
                                                <a href="components/BateriaRemplazoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BateriaRemplazoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BateriaRemplazoPageRoutingModule.html" data-type="entity-link">BateriaRemplazoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BateriarutinaesperahomePageModule.html" data-type="entity-link">BateriarutinaesperahomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BateriarutinaesperahomePageModule-0eac9e330db471121c376e7160cf5359"' : 'data-target="#xs-components-links-module-BateriarutinaesperahomePageModule-0eac9e330db471121c376e7160cf5359"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BateriarutinaesperahomePageModule-0eac9e330db471121c376e7160cf5359"' :
                                            'id="xs-components-links-module-BateriarutinaesperahomePageModule-0eac9e330db471121c376e7160cf5359"' }>
                                            <li class="link">
                                                <a href="components/BateriarutinaesperahomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BateriarutinaesperahomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BateriarutinaesperahomePageRoutingModule.html" data-type="entity-link">BateriarutinaesperahomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BateriarutinahomePageModule.html" data-type="entity-link">BateriarutinahomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BateriarutinahomePageModule-44a836503ca7294f9e1a79f530497732"' : 'data-target="#xs-components-links-module-BateriarutinahomePageModule-44a836503ca7294f9e1a79f530497732"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BateriarutinahomePageModule-44a836503ca7294f9e1a79f530497732"' :
                                            'id="xs-components-links-module-BateriarutinahomePageModule-44a836503ca7294f9e1a79f530497732"' }>
                                            <li class="link">
                                                <a href="components/BateriarutinahomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BateriarutinahomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BateriarutinahomePageRoutingModule.html" data-type="entity-link">BateriarutinahomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BateriarutinaPageModule.html" data-type="entity-link">BateriarutinaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BateriarutinaPageModule-a019aeea43c9a8c9aa73ee1425e9bffb"' : 'data-target="#xs-components-links-module-BateriarutinaPageModule-a019aeea43c9a8c9aa73ee1425e9bffb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BateriarutinaPageModule-a019aeea43c9a8c9aa73ee1425e9bffb"' :
                                            'id="xs-components-links-module-BateriarutinaPageModule-a019aeea43c9a8c9aa73ee1425e9bffb"' }>
                                            <li class="link">
                                                <a href="components/BateriarutinaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BateriarutinaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BateriarutinaPageRoutingModule.html" data-type="entity-link">BateriarutinaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CalendarioPageModule.html" data-type="entity-link">CalendarioPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CalendarioPageModule-8a07b65f9074483f7b21f9f8355a5405"' : 'data-target="#xs-components-links-module-CalendarioPageModule-8a07b65f9074483f7b21f9f8355a5405"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CalendarioPageModule-8a07b65f9074483f7b21f9f8355a5405"' :
                                            'id="xs-components-links-module-CalendarioPageModule-8a07b65f9074483f7b21f9f8355a5405"' }>
                                            <li class="link">
                                                <a href="components/CalendarioPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalendarioPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalendarioPageRoutingModule.html" data-type="entity-link">CalendarioPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CalentamientodosPageModule.html" data-type="entity-link">CalentamientodosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CalentamientodosPageModule-a238610b36df2e5029dbba5ad9dc91ea"' : 'data-target="#xs-components-links-module-CalentamientodosPageModule-a238610b36df2e5029dbba5ad9dc91ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CalentamientodosPageModule-a238610b36df2e5029dbba5ad9dc91ea"' :
                                            'id="xs-components-links-module-CalentamientodosPageModule-a238610b36df2e5029dbba5ad9dc91ea"' }>
                                            <li class="link">
                                                <a href="components/CalentamientodosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalentamientodosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalentamientodosPageRoutingModule.html" data-type="entity-link">CalentamientodosPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CalentamientoInfoPageModule.html" data-type="entity-link">CalentamientoInfoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CalentamientoInfoPageModule-9ebdca5ef7900db51973aa49d8515d99"' : 'data-target="#xs-components-links-module-CalentamientoInfoPageModule-9ebdca5ef7900db51973aa49d8515d99"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CalentamientoInfoPageModule-9ebdca5ef7900db51973aa49d8515d99"' :
                                            'id="xs-components-links-module-CalentamientoInfoPageModule-9ebdca5ef7900db51973aa49d8515d99"' }>
                                            <li class="link">
                                                <a href="components/CalentamientoInfoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalentamientoInfoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalentamientoInfoPageRoutingModule.html" data-type="entity-link">CalentamientoInfoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CalentamientoPageModule.html" data-type="entity-link">CalentamientoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CalentamientoPageModule-1499e3a9cf3c0395f95ab4cdb2e7c0b5"' : 'data-target="#xs-components-links-module-CalentamientoPageModule-1499e3a9cf3c0395f95ab4cdb2e7c0b5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CalentamientoPageModule-1499e3a9cf3c0395f95ab4cdb2e7c0b5"' :
                                            'id="xs-components-links-module-CalentamientoPageModule-1499e3a9cf3c0395f95ab4cdb2e7c0b5"' }>
                                            <li class="link">
                                                <a href="components/CalentamientoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CalentamientoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalentamientoPageRoutingModule.html" data-type="entity-link">CalentamientoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CambiarejercicioPageModule.html" data-type="entity-link">CambiarejercicioPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CambiarejercicioPageModule-251acca94d4c5b4472eeeb3fb50ace24"' : 'data-target="#xs-components-links-module-CambiarejercicioPageModule-251acca94d4c5b4472eeeb3fb50ace24"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CambiarejercicioPageModule-251acca94d4c5b4472eeeb3fb50ace24"' :
                                            'id="xs-components-links-module-CambiarejercicioPageModule-251acca94d4c5b4472eeeb3fb50ace24"' }>
                                            <li class="link">
                                                <a href="components/CambiarejercicioPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CambiarejercicioPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CambiarejercicioPageRoutingModule.html" data-type="entity-link">CambiarejercicioPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComidaPageModule.html" data-type="entity-link">ComidaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComidaPageModule-dba12c3c4d06da1f0628a8b111e3bfb5"' : 'data-target="#xs-components-links-module-ComidaPageModule-dba12c3c4d06da1f0628a8b111e3bfb5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComidaPageModule-dba12c3c4d06da1f0628a8b111e3bfb5"' :
                                            'id="xs-components-links-module-ComidaPageModule-dba12c3c4d06da1f0628a8b111e3bfb5"' }>
                                            <li class="link">
                                                <a href="components/ComidaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ComidaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComidaPageRoutingModule.html" data-type="entity-link">ComidaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link">ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-f8d5e4f64edfa81479be8bbde162b4fa"' : 'data-target="#xs-components-links-module-ComponentsModule-f8d5e4f64edfa81479be8bbde162b4fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-f8d5e4f64edfa81479be8bbde162b4fa"' :
                                            'id="xs-components-links-module-ComponentsModule-f8d5e4f64edfa81479be8bbde162b4fa"' }>
                                            <li class="link">
                                                <a href="components/AntecedentefmliarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AntecedentefmliarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BackBtnComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BackBtnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EdadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EdadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Estatura2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Estatura2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EstaturaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EstaturaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FotosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FotosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistorialComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HistorialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndicadoresComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IndicadoresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndicadorescomparacionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IndicadorescomparacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MedidasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MedidasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PesoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PesoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PopinfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PopinfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PopmensajeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PopmensajeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PopremplazarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PopremplazarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PremiumComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PremiumComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgresoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgresoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TutorialAlimentoPaso1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TutorialAlimentoPaso1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TutorialAlimentoPaso2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TutorialAlimentoPaso2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TutorialAlimentoPaso3Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TutorialAlimentoPaso3Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TutorialAlimentoPaso4Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TutorialAlimentoPaso4Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TutorialPlanesPaso1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TutorialPlanesPaso1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TutorialPlanesPaso2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TutorialPlanesPaso2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TutorialPlanesPaso3Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TutorialPlanesPaso3Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TutorialPlanesPaso4Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TutorialPlanesPaso4Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CorazonPageModule.html" data-type="entity-link">CorazonPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CorazonPageModule-d359d9414baa5046aee942bc43e7b984"' : 'data-target="#xs-components-links-module-CorazonPageModule-d359d9414baa5046aee942bc43e7b984"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CorazonPageModule-d359d9414baa5046aee942bc43e7b984"' :
                                            'id="xs-components-links-module-CorazonPageModule-d359d9414baa5046aee942bc43e7b984"' }>
                                            <li class="link">
                                                <a href="components/CorazonPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CorazonPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CorazonPageRoutingModule.html" data-type="entity-link">CorazonPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardPageModule.html" data-type="entity-link">DashboardPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardPageModule-2bc5b7b690b171be8653e9c4efcba516"' : 'data-target="#xs-components-links-module-DashboardPageModule-2bc5b7b690b171be8653e9c4efcba516"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardPageModule-2bc5b7b690b171be8653e9c4efcba516"' :
                                            'id="xs-components-links-module-DashboardPageModule-2bc5b7b690b171be8653e9c4efcba516"' }>
                                            <li class="link">
                                                <a href="components/DashboardPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardPageRoutingModule.html" data-type="entity-link">DashboardPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DescargarPageModule.html" data-type="entity-link">DescargarPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DescargarPageModule-138a4ba7221812a588876622e6d03aa7"' : 'data-target="#xs-components-links-module-DescargarPageModule-138a4ba7221812a588876622e6d03aa7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DescargarPageModule-138a4ba7221812a588876622e6d03aa7"' :
                                            'id="xs-components-links-module-DescargarPageModule-138a4ba7221812a588876622e6d03aa7"' }>
                                            <li class="link">
                                                <a href="components/DescargarPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DescargarPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DescargarPageRoutingModule.html" data-type="entity-link">DescargarPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EntrenamientosPageModule.html" data-type="entity-link">EntrenamientosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EntrenamientosPageModule-ed0d331887d00a2494aa4de275fb50b7"' : 'data-target="#xs-components-links-module-EntrenamientosPageModule-ed0d331887d00a2494aa4de275fb50b7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EntrenamientosPageModule-ed0d331887d00a2494aa4de275fb50b7"' :
                                            'id="xs-components-links-module-EntrenamientosPageModule-ed0d331887d00a2494aa4de275fb50b7"' }>
                                            <li class="link">
                                                <a href="components/EntrenamientosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntrenamientosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntrenamientosPageRoutingModule.html" data-type="entity-link">EntrenamientosPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EstiramientosPageModule.html" data-type="entity-link">EstiramientosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EstiramientosPageModule-d9fd895f8582b553f7a1aa4480552430"' : 'data-target="#xs-components-links-module-EstiramientosPageModule-d9fd895f8582b553f7a1aa4480552430"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EstiramientosPageModule-d9fd895f8582b553f7a1aa4480552430"' :
                                            'id="xs-components-links-module-EstiramientosPageModule-d9fd895f8582b553f7a1aa4480552430"' }>
                                            <li class="link">
                                                <a href="components/EstiramientosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EstiramientosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EstiramientosPageRoutingModule.html" data-type="entity-link">EstiramientosPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExperienciaPageModule.html" data-type="entity-link">ExperienciaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExperienciaPageModule-8da4e9335a87fea3587983d125b46fc1"' : 'data-target="#xs-components-links-module-ExperienciaPageModule-8da4e9335a87fea3587983d125b46fc1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExperienciaPageModule-8da4e9335a87fea3587983d125b46fc1"' :
                                            'id="xs-components-links-module-ExperienciaPageModule-8da4e9335a87fea3587983d125b46fc1"' }>
                                            <li class="link">
                                                <a href="components/ExperienciaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExperienciaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExperienciaPageRoutingModule.html" data-type="entity-link">ExperienciaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormMedicoPageModule.html" data-type="entity-link">FormMedicoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormMedicoPageModule-a7a5daf7c72f96d9f7636d96439ed3e9"' : 'data-target="#xs-components-links-module-FormMedicoPageModule-a7a5daf7c72f96d9f7636d96439ed3e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormMedicoPageModule-a7a5daf7c72f96d9f7636d96439ed3e9"' :
                                            'id="xs-components-links-module-FormMedicoPageModule-a7a5daf7c72f96d9f7636d96439ed3e9"' }>
                                            <li class="link">
                                                <a href="components/FormMedicoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormMedicoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormMedicoPageRoutingModule.html" data-type="entity-link">FormMedicoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-13ce41fd68b3d441068558ff91789297"' : 'data-target="#xs-components-links-module-HomePageModule-13ce41fd68b3d441068558ff91789297"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-13ce41fd68b3d441068558ff91789297"' :
                                            'id="xs-components-links-module-HomePageModule-13ce41fd68b3d441068558ff91789297"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IndicadoresPageModule.html" data-type="entity-link">IndicadoresPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IndicadoresPageModule-46cc3cf81c7af059fdfd07dbbfdd2a8b"' : 'data-target="#xs-components-links-module-IndicadoresPageModule-46cc3cf81c7af059fdfd07dbbfdd2a8b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IndicadoresPageModule-46cc3cf81c7af059fdfd07dbbfdd2a8b"' :
                                            'id="xs-components-links-module-IndicadoresPageModule-46cc3cf81c7af059fdfd07dbbfdd2a8b"' }>
                                            <li class="link">
                                                <a href="components/IndicadoresPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IndicadoresPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IndicadoresPageRoutingModule.html" data-type="entity-link">IndicadoresPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LineanutricionalPageModule.html" data-type="entity-link">LineanutricionalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LineanutricionalPageModule-320bf93e8d0bee6250b262e224c10dab"' : 'data-target="#xs-components-links-module-LineanutricionalPageModule-320bf93e8d0bee6250b262e224c10dab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LineanutricionalPageModule-320bf93e8d0bee6250b262e224c10dab"' :
                                            'id="xs-components-links-module-LineanutricionalPageModule-320bf93e8d0bee6250b262e224c10dab"' }>
                                            <li class="link">
                                                <a href="components/LineanutricionalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LineanutricionalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LineanutricionalPageRoutingModule.html" data-type="entity-link">LineanutricionalPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ListadoalimentoPageModule.html" data-type="entity-link">ListadoalimentoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListadoalimentoPageModule-d97e1cfb276a051d844803bbc1816c30"' : 'data-target="#xs-components-links-module-ListadoalimentoPageModule-d97e1cfb276a051d844803bbc1816c30"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListadoalimentoPageModule-d97e1cfb276a051d844803bbc1816c30"' :
                                            'id="xs-components-links-module-ListadoalimentoPageModule-d97e1cfb276a051d844803bbc1816c30"' }>
                                            <li class="link">
                                                <a href="components/ListadoalimentoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListadoalimentoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListadoalimentoPageRoutingModule.html" data-type="entity-link">ListadoalimentoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ListaejercicioremplazarPageModule.html" data-type="entity-link">ListaejercicioremplazarPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListaejercicioremplazarPageModule-8fe45e740a6e60ee9c32686c2e521b27"' : 'data-target="#xs-components-links-module-ListaejercicioremplazarPageModule-8fe45e740a6e60ee9c32686c2e521b27"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListaejercicioremplazarPageModule-8fe45e740a6e60ee9c32686c2e521b27"' :
                                            'id="xs-components-links-module-ListaejercicioremplazarPageModule-8fe45e740a6e60ee9c32686c2e521b27"' }>
                                            <li class="link">
                                                <a href="components/ListaejercicioremplazarPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListaejercicioremplazarPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListaejercicioremplazarPageRoutingModule.html" data-type="entity-link">ListaejercicioremplazarPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link">LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-914e8573cc62a35705a5281425a92841"' : 'data-target="#xs-components-links-module-LoginPageModule-914e8573cc62a35705a5281425a92841"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-914e8573cc62a35705a5281425a92841"' :
                                            'id="xs-components-links-module-LoginPageModule-914e8573cc62a35705a5281425a92841"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link">LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LugarEjerciciosPageModule.html" data-type="entity-link">LugarEjerciciosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LugarEjerciciosPageModule-462e78f37899d40a68c56d0723b0b2e1"' : 'data-target="#xs-components-links-module-LugarEjerciciosPageModule-462e78f37899d40a68c56d0723b0b2e1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LugarEjerciciosPageModule-462e78f37899d40a68c56d0723b0b2e1"' :
                                            'id="xs-components-links-module-LugarEjerciciosPageModule-462e78f37899d40a68c56d0723b0b2e1"' }>
                                            <li class="link">
                                                <a href="components/LugarEjerciciosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LugarEjerciciosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LugarEjerciciosPageRoutingModule.html" data-type="entity-link">LugarEjerciciosPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MedidasPageModule.html" data-type="entity-link">MedidasPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MedidasPageModule-c04f29330d4e7696d3cc13d94db2bce1"' : 'data-target="#xs-components-links-module-MedidasPageModule-c04f29330d4e7696d3cc13d94db2bce1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MedidasPageModule-c04f29330d4e7696d3cc13d94db2bce1"' :
                                            'id="xs-components-links-module-MedidasPageModule-c04f29330d4e7696d3cc13d94db2bce1"' }>
                                            <li class="link">
                                                <a href="components/MedidasPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MedidasPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MedidasPageRoutingModule.html" data-type="entity-link">MedidasPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MensajecapacidadPageModule.html" data-type="entity-link">MensajecapacidadPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MensajecapacidadPageModule-23e8e07c68d6ab357e44a867b4b1a761"' : 'data-target="#xs-components-links-module-MensajecapacidadPageModule-23e8e07c68d6ab357e44a867b4b1a761"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MensajecapacidadPageModule-23e8e07c68d6ab357e44a867b4b1a761"' :
                                            'id="xs-components-links-module-MensajecapacidadPageModule-23e8e07c68d6ab357e44a867b4b1a761"' }>
                                            <li class="link">
                                                <a href="components/MensajecapacidadPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MensajecapacidadPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MensajecapacidadPageRoutingModule.html" data-type="entity-link">MensajecapacidadPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MensajecorazonPageModule.html" data-type="entity-link">MensajecorazonPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MensajecorazonPageModule-14f3924c40ff7089c677dcd635ff4d62"' : 'data-target="#xs-components-links-module-MensajecorazonPageModule-14f3924c40ff7089c677dcd635ff4d62"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MensajecorazonPageModule-14f3924c40ff7089c677dcd635ff4d62"' :
                                            'id="xs-components-links-module-MensajecorazonPageModule-14f3924c40ff7089c677dcd635ff4d62"' }>
                                            <li class="link">
                                                <a href="components/MensajecorazonPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MensajecorazonPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MensajecorazonPageRoutingModule.html" data-type="entity-link">MensajecorazonPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModalComparacionPageModule.html" data-type="entity-link">ModalComparacionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalComparacionPageModule-cf62dd86f40d7429c63606e14f9f9d72"' : 'data-target="#xs-components-links-module-ModalComparacionPageModule-cf62dd86f40d7429c63606e14f9f9d72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalComparacionPageModule-cf62dd86f40d7429c63606e14f9f9d72"' :
                                            'id="xs-components-links-module-ModalComparacionPageModule-cf62dd86f40d7429c63606e14f9f9d72"' }>
                                            <li class="link">
                                                <a href="components/ModalComparacionPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComparacionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalComparacionPageRoutingModule.html" data-type="entity-link">ModalComparacionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModalCorazonInfoPageModule.html" data-type="entity-link">ModalCorazonInfoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalCorazonInfoPageModule-6ec02d2576ba0dc0ba00bd30dd0d012d"' : 'data-target="#xs-components-links-module-ModalCorazonInfoPageModule-6ec02d2576ba0dc0ba00bd30dd0d012d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalCorazonInfoPageModule-6ec02d2576ba0dc0ba00bd30dd0d012d"' :
                                            'id="xs-components-links-module-ModalCorazonInfoPageModule-6ec02d2576ba0dc0ba00bd30dd0d012d"' }>
                                            <li class="link">
                                                <a href="components/ModalCorazonInfoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalCorazonInfoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalCorazonInfoPageRoutingModule.html" data-type="entity-link">ModalCorazonInfoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModalEmailPageModule.html" data-type="entity-link">ModalEmailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalEmailPageModule-d1ecd085d233c51be21e4c766d0cbd82"' : 'data-target="#xs-components-links-module-ModalEmailPageModule-d1ecd085d233c51be21e4c766d0cbd82"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalEmailPageModule-d1ecd085d233c51be21e4c766d0cbd82"' :
                                            'id="xs-components-links-module-ModalEmailPageModule-d1ecd085d233c51be21e4c766d0cbd82"' }>
                                            <li class="link">
                                                <a href="components/ModalEmailPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalEmailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalEmailPageRoutingModule.html" data-type="entity-link">ModalEmailPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModalFotosPageModule.html" data-type="entity-link">ModalFotosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalFotosPageModule-2458c9d245f799310eda3e5fafba01d4"' : 'data-target="#xs-components-links-module-ModalFotosPageModule-2458c9d245f799310eda3e5fafba01d4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalFotosPageModule-2458c9d245f799310eda3e5fafba01d4"' :
                                            'id="xs-components-links-module-ModalFotosPageModule-2458c9d245f799310eda3e5fafba01d4"' }>
                                            <li class="link">
                                                <a href="components/ModalFotosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalFotosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalFotosPageRoutingModule.html" data-type="entity-link">ModalFotosPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModalInfoPageModule.html" data-type="entity-link">ModalInfoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalInfoPageModule-548b82f3f61c030876a91c9907a6bc2b"' : 'data-target="#xs-components-links-module-ModalInfoPageModule-548b82f3f61c030876a91c9907a6bc2b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalInfoPageModule-548b82f3f61c030876a91c9907a6bc2b"' :
                                            'id="xs-components-links-module-ModalInfoPageModule-548b82f3f61c030876a91c9907a6bc2b"' }>
                                            <li class="link">
                                                <a href="components/ModalInfoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalInfoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalInfoPageRoutingModule.html" data-type="entity-link">ModalInfoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModalMedidasPageModule.html" data-type="entity-link">ModalMedidasPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalMedidasPageModule-7469b3547d0bdf0aec960ebe199347db"' : 'data-target="#xs-components-links-module-ModalMedidasPageModule-7469b3547d0bdf0aec960ebe199347db"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalMedidasPageModule-7469b3547d0bdf0aec960ebe199347db"' :
                                            'id="xs-components-links-module-ModalMedidasPageModule-7469b3547d0bdf0aec960ebe199347db"' }>
                                            <li class="link">
                                                <a href="components/ModalMedidasPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalMedidasPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalMedidasPageRoutingModule.html" data-type="entity-link">ModalMedidasPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ObjetivoPageModule.html" data-type="entity-link">ObjetivoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ObjetivoPageModule-5dc1333d3bc367e6f1cf0d160c688dae"' : 'data-target="#xs-components-links-module-ObjetivoPageModule-5dc1333d3bc367e6f1cf0d160c688dae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ObjetivoPageModule-5dc1333d3bc367e6f1cf0d160c688dae"' :
                                            'id="xs-components-links-module-ObjetivoPageModule-5dc1333d3bc367e6f1cf0d160c688dae"' }>
                                            <li class="link">
                                                <a href="components/ObjetivoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ObjetivoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ObjetivoPageRoutingModule.html" data-type="entity-link">ObjetivoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PasoinicialPageModule.html" data-type="entity-link">PasoinicialPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PasoinicialPageModule-a0c7d87fba8e8c634fd9efe5366aa79e"' : 'data-target="#xs-components-links-module-PasoinicialPageModule-a0c7d87fba8e8c634fd9efe5366aa79e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PasoinicialPageModule-a0c7d87fba8e8c634fd9efe5366aa79e"' :
                                            'id="xs-components-links-module-PasoinicialPageModule-a0c7d87fba8e8c634fd9efe5366aa79e"' }>
                                            <li class="link">
                                                <a href="components/PasoinicialPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PasoinicialPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PasoinicialPageRoutingModule.html" data-type="entity-link">PasoinicialPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PaypalPageModule.html" data-type="entity-link">PaypalPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PaypalPageModule-5f3442893db4c47cbcb123630dd870aa"' : 'data-target="#xs-components-links-module-PaypalPageModule-5f3442893db4c47cbcb123630dd870aa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaypalPageModule-5f3442893db4c47cbcb123630dd870aa"' :
                                            'id="xs-components-links-module-PaypalPageModule-5f3442893db4c47cbcb123630dd870aa"' }>
                                            <li class="link">
                                                <a href="components/PaypalPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaypalPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaypalPageRoutingModule.html" data-type="entity-link">PaypalPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PercepcionentrenamientoPageModule.html" data-type="entity-link">PercepcionentrenamientoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PercepcionentrenamientoPageModule-d16086fecb289f881f01b81a0786feb9"' : 'data-target="#xs-components-links-module-PercepcionentrenamientoPageModule-d16086fecb289f881f01b81a0786feb9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PercepcionentrenamientoPageModule-d16086fecb289f881f01b81a0786feb9"' :
                                            'id="xs-components-links-module-PercepcionentrenamientoPageModule-d16086fecb289f881f01b81a0786feb9"' }>
                                            <li class="link">
                                                <a href="components/PercepcionentrenamientoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PercepcionentrenamientoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PercepcionentrenamientoPageRoutingModule.html" data-type="entity-link">PercepcionentrenamientoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PerfilPageModule.html" data-type="entity-link">PerfilPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PerfilPageModule-2e745ebaf24d36d7d467055e688e2a50"' : 'data-target="#xs-components-links-module-PerfilPageModule-2e745ebaf24d36d7d467055e688e2a50"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PerfilPageModule-2e745ebaf24d36d7d467055e688e2a50"' :
                                            'id="xs-components-links-module-PerfilPageModule-2e745ebaf24d36d7d467055e688e2a50"' }>
                                            <li class="link">
                                                <a href="components/PerfilPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PerfilPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PerfilPageRoutingModule.html" data-type="entity-link">PerfilPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PesoyestaturaPageModule.html" data-type="entity-link">PesoyestaturaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PesoyestaturaPageModule-6a97b08e84479ca5035d727adc921590"' : 'data-target="#xs-components-links-module-PesoyestaturaPageModule-6a97b08e84479ca5035d727adc921590"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PesoyestaturaPageModule-6a97b08e84479ca5035d727adc921590"' :
                                            'id="xs-components-links-module-PesoyestaturaPageModule-6a97b08e84479ca5035d727adc921590"' }>
                                            <li class="link">
                                                <a href="components/PesoyestaturaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PesoyestaturaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PesoyestaturaPageRoutingModule.html" data-type="entity-link">PesoyestaturaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link">PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipesModule-1219bf5effa227ff20af5f1c95aa8025"' : 'data-target="#xs-pipes-links-module-PipesModule-1219bf5effa227ff20af5f1c95aa8025"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-1219bf5effa227ff20af5f1c95aa8025"' :
                                            'id="xs-pipes-links-module-PipesModule-1219bf5effa227ff20af5f1c95aa8025"' }>
                                            <li class="link">
                                                <a href="pipes/CapitalizadoPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CapitalizadoPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlanesPagosPageModule.html" data-type="entity-link">PlanesPagosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PlanesPagosPageModule-3c4c8490382c1428de7e182d8bdaa67a"' : 'data-target="#xs-components-links-module-PlanesPagosPageModule-3c4c8490382c1428de7e182d8bdaa67a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PlanesPagosPageModule-3c4c8490382c1428de7e182d8bdaa67a"' :
                                            'id="xs-components-links-module-PlanesPagosPageModule-3c4c8490382c1428de7e182d8bdaa67a"' }>
                                            <li class="link">
                                                <a href="components/PlanesPagosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlanesPagosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlanesPagosPageRoutingModule.html" data-type="entity-link">PlanesPagosPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PorcentajegrasaPageModule.html" data-type="entity-link">PorcentajegrasaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PorcentajegrasaPageModule-f2c5ee227f81768f35f4b6a1d8f8bd02"' : 'data-target="#xs-components-links-module-PorcentajegrasaPageModule-f2c5ee227f81768f35f4b6a1d8f8bd02"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PorcentajegrasaPageModule-f2c5ee227f81768f35f4b6a1d8f8bd02"' :
                                            'id="xs-components-links-module-PorcentajegrasaPageModule-f2c5ee227f81768f35f4b6a1d8f8bd02"' }>
                                            <li class="link">
                                                <a href="components/PorcentajegrasaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PorcentajegrasaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PorcentajegrasaPageRoutingModule.html" data-type="entity-link">PorcentajegrasaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProgresoPageModule.html" data-type="entity-link">ProgresoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProgresoPageModule-06727e761edd3cd7713524c55ba0ea5d"' : 'data-target="#xs-components-links-module-ProgresoPageModule-06727e761edd3cd7713524c55ba0ea5d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProgresoPageModule-06727e761edd3cd7713524c55ba0ea5d"' :
                                            'id="xs-components-links-module-ProgresoPageModule-06727e761edd3cd7713524c55ba0ea5d"' }>
                                            <li class="link">
                                                <a href="components/ProgresoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgresoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProgresoPageRoutingModule.html" data-type="entity-link">ProgresoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RangodeedadPageModule.html" data-type="entity-link">RangodeedadPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RangodeedadPageModule-aaa11e9d4c35c4fcbe9e263b059658ec"' : 'data-target="#xs-components-links-module-RangodeedadPageModule-aaa11e9d4c35c4fcbe9e263b059658ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RangodeedadPageModule-aaa11e9d4c35c4fcbe9e263b059658ec"' :
                                            'id="xs-components-links-module-RangodeedadPageModule-aaa11e9d4c35c4fcbe9e263b059658ec"' }>
                                            <li class="link">
                                                <a href="components/RangodeedadPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RangodeedadPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RangodeedadPageRoutingModule.html" data-type="entity-link">RangodeedadPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrarInfoPageModule.html" data-type="entity-link">RegistrarInfoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegistrarInfoPageModule-5e325cef36f8b0e2e971d1fba218f0b7"' : 'data-target="#xs-components-links-module-RegistrarInfoPageModule-5e325cef36f8b0e2e971d1fba218f0b7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegistrarInfoPageModule-5e325cef36f8b0e2e971d1fba218f0b7"' :
                                            'id="xs-components-links-module-RegistrarInfoPageModule-5e325cef36f8b0e2e971d1fba218f0b7"' }>
                                            <li class="link">
                                                <a href="components/RegistrarInfoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistrarInfoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrarInfoPageRoutingModule.html" data-type="entity-link">RegistrarInfoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RelacioncaderaPageModule.html" data-type="entity-link">RelacioncaderaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RelacioncaderaPageModule-bf64cf802d2b4d8f3c7b8be0bb26d37b"' : 'data-target="#xs-components-links-module-RelacioncaderaPageModule-bf64cf802d2b4d8f3c7b8be0bb26d37b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RelacioncaderaPageModule-bf64cf802d2b4d8f3c7b8be0bb26d37b"' :
                                            'id="xs-components-links-module-RelacioncaderaPageModule-bf64cf802d2b4d8f3c7b8be0bb26d37b"' }>
                                            <li class="link">
                                                <a href="components/RelacioncaderaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RelacioncaderaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RelacioncaderaPageRoutingModule.html" data-type="entity-link">RelacioncaderaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RutinaEntrenamientoPageModule.html" data-type="entity-link">RutinaEntrenamientoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RutinaEntrenamientoPageModule-f55ef8822c119122a0e8b2c212a1b2e1"' : 'data-target="#xs-components-links-module-RutinaEntrenamientoPageModule-f55ef8822c119122a0e8b2c212a1b2e1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RutinaEntrenamientoPageModule-f55ef8822c119122a0e8b2c212a1b2e1"' :
                                            'id="xs-components-links-module-RutinaEntrenamientoPageModule-f55ef8822c119122a0e8b2c212a1b2e1"' }>
                                            <li class="link">
                                                <a href="components/RutinaEntrenamientoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RutinaEntrenamientoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RutinaEntrenamientoPageRoutingModule.html" data-type="entity-link">RutinaEntrenamientoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RutinaPageModule.html" data-type="entity-link">RutinaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RutinaPageModule-47be569575d4aef9a27ee2588fee0e3f"' : 'data-target="#xs-components-links-module-RutinaPageModule-47be569575d4aef9a27ee2588fee0e3f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RutinaPageModule-47be569575d4aef9a27ee2588fee0e3f"' :
                                            'id="xs-components-links-module-RutinaPageModule-47be569575d4aef9a27ee2588fee0e3f"' }>
                                            <li class="link">
                                                <a href="components/RutinaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RutinaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RutinaPageRoutingModule.html" data-type="entity-link">RutinaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link">TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-0cebf4fa42db8c7aeb6b8373385af101"' : 'data-target="#xs-components-links-module-TabsPageModule-0cebf4fa42db8c7aeb6b8373385af101"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-0cebf4fa42db8c7aeb6b8373385af101"' :
                                            'id="xs-components-links-module-TabsPageModule-0cebf4fa42db8c7aeb6b8373385af101"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link">TabsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TerminosPageModule.html" data-type="entity-link">TerminosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TerminosPageModule-e657f16b11e263f50ce91326039d43d1"' : 'data-target="#xs-components-links-module-TerminosPageModule-e657f16b11e263f50ce91326039d43d1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TerminosPageModule-e657f16b11e263f50ce91326039d43d1"' :
                                            'id="xs-components-links-module-TerminosPageModule-e657f16b11e263f50ce91326039d43d1"' }>
                                            <li class="link">
                                                <a href="components/TerminosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TerminosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TerminosPageRoutingModule.html" data-type="entity-link">TerminosPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestCapacidadInfoPageModule.html" data-type="entity-link">TestCapacidadInfoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestCapacidadInfoPageModule-5ab0718cf8160fafa10b7c5f4e5bedcf"' : 'data-target="#xs-components-links-module-TestCapacidadInfoPageModule-5ab0718cf8160fafa10b7c5f4e5bedcf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestCapacidadInfoPageModule-5ab0718cf8160fafa10b7c5f4e5bedcf"' :
                                            'id="xs-components-links-module-TestCapacidadInfoPageModule-5ab0718cf8160fafa10b7c5f4e5bedcf"' }>
                                            <li class="link">
                                                <a href="components/TestCapacidadInfoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestCapacidadInfoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestCapacidadInfoPageRoutingModule.html" data-type="entity-link">TestCapacidadInfoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestCapacidadManualPageModule.html" data-type="entity-link">TestCapacidadManualPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestCapacidadManualPageModule-7cb5184a49b0298e564bc25e64396f9d"' : 'data-target="#xs-components-links-module-TestCapacidadManualPageModule-7cb5184a49b0298e564bc25e64396f9d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestCapacidadManualPageModule-7cb5184a49b0298e564bc25e64396f9d"' :
                                            'id="xs-components-links-module-TestCapacidadManualPageModule-7cb5184a49b0298e564bc25e64396f9d"' }>
                                            <li class="link">
                                                <a href="components/TestCapacidadManualPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestCapacidadManualPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestCapacidadManualPageRoutingModule.html" data-type="entity-link">TestCapacidadManualPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaCategoriaPageModule.html" data-type="entity-link">TestFuerzaCategoriaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestFuerzaCategoriaPageModule-ea08cf9a48aa34dd2d8316f0d27aad0c"' : 'data-target="#xs-components-links-module-TestFuerzaCategoriaPageModule-ea08cf9a48aa34dd2d8316f0d27aad0c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestFuerzaCategoriaPageModule-ea08cf9a48aa34dd2d8316f0d27aad0c"' :
                                            'id="xs-components-links-module-TestFuerzaCategoriaPageModule-ea08cf9a48aa34dd2d8316f0d27aad0c"' }>
                                            <li class="link">
                                                <a href="components/TestFuerzaCategoriaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestFuerzaCategoriaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaCategoriaPageRoutingModule.html" data-type="entity-link">TestFuerzaCategoriaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaInfoPageModule.html" data-type="entity-link">TestFuerzaInfoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestFuerzaInfoPageModule-e350256063c4e12fb67c2744e4699dee"' : 'data-target="#xs-components-links-module-TestFuerzaInfoPageModule-e350256063c4e12fb67c2744e4699dee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestFuerzaInfoPageModule-e350256063c4e12fb67c2744e4699dee"' :
                                            'id="xs-components-links-module-TestFuerzaInfoPageModule-e350256063c4e12fb67c2744e4699dee"' }>
                                            <li class="link">
                                                <a href="components/TestFuerzaInfoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestFuerzaInfoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaInfoPageRoutingModule.html" data-type="entity-link">TestFuerzaInfoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaManualPageModule.html" data-type="entity-link">TestFuerzaManualPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestFuerzaManualPageModule-c2936574235149b62a7b0ff64d2e31c8"' : 'data-target="#xs-components-links-module-TestFuerzaManualPageModule-c2936574235149b62a7b0ff64d2e31c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestFuerzaManualPageModule-c2936574235149b62a7b0ff64d2e31c8"' :
                                            'id="xs-components-links-module-TestFuerzaManualPageModule-c2936574235149b62a7b0ff64d2e31c8"' }>
                                            <li class="link">
                                                <a href="components/TestFuerzaManualPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestFuerzaManualPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaManualPageRoutingModule.html" data-type="entity-link">TestFuerzaManualPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaManualPasosPageModule.html" data-type="entity-link">TestFuerzaManualPasosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestFuerzaManualPasosPageModule-e1bbd19454b4eb382776f1b854883a8a"' : 'data-target="#xs-components-links-module-TestFuerzaManualPasosPageModule-e1bbd19454b4eb382776f1b854883a8a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestFuerzaManualPasosPageModule-e1bbd19454b4eb382776f1b854883a8a"' :
                                            'id="xs-components-links-module-TestFuerzaManualPasosPageModule-e1bbd19454b4eb382776f1b854883a8a"' }>
                                            <li class="link">
                                                <a href="components/TestFuerzaManualPasosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestFuerzaManualPasosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaManualPasosPageRoutingModule.html" data-type="entity-link">TestFuerzaManualPasosPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaMenu2PageModule.html" data-type="entity-link">TestFuerzaMenu2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestFuerzaMenu2PageModule-d42ff513f050b69d6ba68a1628bcd4c4"' : 'data-target="#xs-components-links-module-TestFuerzaMenu2PageModule-d42ff513f050b69d6ba68a1628bcd4c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestFuerzaMenu2PageModule-d42ff513f050b69d6ba68a1628bcd4c4"' :
                                            'id="xs-components-links-module-TestFuerzaMenu2PageModule-d42ff513f050b69d6ba68a1628bcd4c4"' }>
                                            <li class="link">
                                                <a href="components/TestFuerzaMenu2Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestFuerzaMenu2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaMenu2PageRoutingModule.html" data-type="entity-link">TestFuerzaMenu2PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaMenu3PageModule.html" data-type="entity-link">TestFuerzaMenu3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestFuerzaMenu3PageModule-6dc3ec6e5be83454945bdbc1ad3147c0"' : 'data-target="#xs-components-links-module-TestFuerzaMenu3PageModule-6dc3ec6e5be83454945bdbc1ad3147c0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestFuerzaMenu3PageModule-6dc3ec6e5be83454945bdbc1ad3147c0"' :
                                            'id="xs-components-links-module-TestFuerzaMenu3PageModule-6dc3ec6e5be83454945bdbc1ad3147c0"' }>
                                            <li class="link">
                                                <a href="components/TestFuerzaMenu3Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestFuerzaMenu3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaMenu3PageRoutingModule.html" data-type="entity-link">TestFuerzaMenu3PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaMenuPageModule.html" data-type="entity-link">TestFuerzaMenuPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestFuerzaMenuPageModule-3672023538770d66b828920732bd3165"' : 'data-target="#xs-components-links-module-TestFuerzaMenuPageModule-3672023538770d66b828920732bd3165"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestFuerzaMenuPageModule-3672023538770d66b828920732bd3165"' :
                                            'id="xs-components-links-module-TestFuerzaMenuPageModule-3672023538770d66b828920732bd3165"' }>
                                            <li class="link">
                                                <a href="components/TestFuerzaMenuPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestFuerzaMenuPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaMenuPageRoutingModule.html" data-type="entity-link">TestFuerzaMenuPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaPasos1PageModule.html" data-type="entity-link">TestFuerzaPasos1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestFuerzaPasos1PageModule-43e42ae077784ccc5a45da1c9fa83dab"' : 'data-target="#xs-components-links-module-TestFuerzaPasos1PageModule-43e42ae077784ccc5a45da1c9fa83dab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestFuerzaPasos1PageModule-43e42ae077784ccc5a45da1c9fa83dab"' :
                                            'id="xs-components-links-module-TestFuerzaPasos1PageModule-43e42ae077784ccc5a45da1c9fa83dab"' }>
                                            <li class="link">
                                                <a href="components/TestFuerzaPasos1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestFuerzaPasos1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaPasos1PageRoutingModule.html" data-type="entity-link">TestFuerzaPasos1PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaPasos2PageModule.html" data-type="entity-link">TestFuerzaPasos2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestFuerzaPasos2PageModule-730064701c904962b6c3dc4bb8863892"' : 'data-target="#xs-components-links-module-TestFuerzaPasos2PageModule-730064701c904962b6c3dc4bb8863892"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestFuerzaPasos2PageModule-730064701c904962b6c3dc4bb8863892"' :
                                            'id="xs-components-links-module-TestFuerzaPasos2PageModule-730064701c904962b6c3dc4bb8863892"' }>
                                            <li class="link">
                                                <a href="components/TestFuerzaPasos2Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestFuerzaPasos2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaPasos2PageRoutingModule.html" data-type="entity-link">TestFuerzaPasos2PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaPasos3PageModule.html" data-type="entity-link">TestFuerzaPasos3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestFuerzaPasos3PageModule-b2f6cda2444f4faf5828012f959643ff"' : 'data-target="#xs-components-links-module-TestFuerzaPasos3PageModule-b2f6cda2444f4faf5828012f959643ff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestFuerzaPasos3PageModule-b2f6cda2444f4faf5828012f959643ff"' :
                                            'id="xs-components-links-module-TestFuerzaPasos3PageModule-b2f6cda2444f4faf5828012f959643ff"' }>
                                            <li class="link">
                                                <a href="components/TestFuerzaPasos3Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestFuerzaPasos3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaPasos3PageRoutingModule.html" data-type="entity-link">TestFuerzaPasos3PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaPasos4PageModule.html" data-type="entity-link">TestFuerzaPasos4PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestFuerzaPasos4PageModule-d9d11458a154b1205ecaeafe7944c72e"' : 'data-target="#xs-components-links-module-TestFuerzaPasos4PageModule-d9d11458a154b1205ecaeafe7944c72e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestFuerzaPasos4PageModule-d9d11458a154b1205ecaeafe7944c72e"' :
                                            'id="xs-components-links-module-TestFuerzaPasos4PageModule-d9d11458a154b1205ecaeafe7944c72e"' }>
                                            <li class="link">
                                                <a href="components/TestFuerzaPasos4Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestFuerzaPasos4Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestFuerzaPasos4PageRoutingModule.html" data-type="entity-link">TestFuerzaPasos4PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestResistenciaPageModule.html" data-type="entity-link">TestResistenciaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestResistenciaPageModule-3c65f449c7dc63e2c70cb2bda6dd1df1"' : 'data-target="#xs-components-links-module-TestResistenciaPageModule-3c65f449c7dc63e2c70cb2bda6dd1df1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestResistenciaPageModule-3c65f449c7dc63e2c70cb2bda6dd1df1"' :
                                            'id="xs-components-links-module-TestResistenciaPageModule-3c65f449c7dc63e2c70cb2bda6dd1df1"' }>
                                            <li class="link">
                                                <a href="components/TestResistenciaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestResistenciaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestResistenciaPageRoutingModule.html" data-type="entity-link">TestResistenciaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TiendaPageModule.html" data-type="entity-link">TiendaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TiendaPageModule-52812ee7a0c6a6e49b98abbec5da345c"' : 'data-target="#xs-components-links-module-TiendaPageModule-52812ee7a0c6a6e49b98abbec5da345c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TiendaPageModule-52812ee7a0c6a6e49b98abbec5da345c"' :
                                            'id="xs-components-links-module-TiendaPageModule-52812ee7a0c6a6e49b98abbec5da345c"' }>
                                            <li class="link">
                                                <a href="components/TiendaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TiendaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TiendaPageRoutingModule.html" data-type="entity-link">TiendaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TiendaProductosPageModule.html" data-type="entity-link">TiendaProductosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TiendaProductosPageModule-4424d9f198e8ac33b360ed29216923d6"' : 'data-target="#xs-components-links-module-TiendaProductosPageModule-4424d9f198e8ac33b360ed29216923d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TiendaProductosPageModule-4424d9f198e8ac33b360ed29216923d6"' :
                                            'id="xs-components-links-module-TiendaProductosPageModule-4424d9f198e8ac33b360ed29216923d6"' }>
                                            <li class="link">
                                                <a href="components/TiendaProductosPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TiendaProductosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TiendaProductosPageRoutingModule.html" data-type="entity-link">TiendaProductosPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TutorialAlimentacionPageModule.html" data-type="entity-link">TutorialAlimentacionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TutorialAlimentacionPageModule-89857849a4f498c1530cb27c18a6c48b"' : 'data-target="#xs-components-links-module-TutorialAlimentacionPageModule-89857849a4f498c1530cb27c18a6c48b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TutorialAlimentacionPageModule-89857849a4f498c1530cb27c18a6c48b"' :
                                            'id="xs-components-links-module-TutorialAlimentacionPageModule-89857849a4f498c1530cb27c18a6c48b"' }>
                                            <li class="link">
                                                <a href="components/TutorialAlimentacionPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TutorialAlimentacionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TutorialAlimentacionPageRoutingModule.html" data-type="entity-link">TutorialAlimentacionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TutorialPlanesPageModule.html" data-type="entity-link">TutorialPlanesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TutorialPlanesPageModule-e26fb1c4f344bd00d542318a056c0aae"' : 'data-target="#xs-components-links-module-TutorialPlanesPageModule-e26fb1c4f344bd00d542318a056c0aae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TutorialPlanesPageModule-e26fb1c4f344bd00d542318a056c0aae"' :
                                            'id="xs-components-links-module-TutorialPlanesPageModule-e26fb1c4f344bd00d542318a056c0aae"' }>
                                            <li class="link">
                                                <a href="components/TutorialPlanesPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TutorialPlanesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TutorialPlanesPageRoutingModule.html" data-type="entity-link">TutorialPlanesPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiFitechService.html" data-type="entity-link">ApiFitechService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MensajesService.html" data-type="entity-link">MensajesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NutricionService.html" data-type="entity-link">NutricionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaypalService.html" data-type="entity-link">PaypalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RutinasService.html" data-type="entity-link">RutinasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TiendaService.html" data-type="entity-link">TiendaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuarioService.html" data-type="entity-link">UsuarioService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/IntroGuard.html" data-type="entity-link">IntroGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoginGuard.html" data-type="entity-link">LoginGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/NutricionGuard.html" data-type="entity-link">NutricionGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/TutorialGuard.html" data-type="entity-link">TutorialGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});