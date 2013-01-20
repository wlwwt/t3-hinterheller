# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# **********************************************************
# Library for TypoScript about general library objects.
# Content:
#	* Copyright Information
#	* Header slogan
#	* Footer image
# **********************************************************

#-------------------------------------------------------------------------------
#	GENERAL: Header slogan
#-------------------------------------------------------------------------------
lib.general.header_slogan = COA
lib.general.header_slogan {
	10 = TEXT
	10 {
            wrap = <div id="headerTop">|</div>
            value (
                <h2 class="imageText">Öffentlich bestellte und vereidigte Sachverständige</h2>
                <div id="nameTitleMessageBox">
                    <h1>
                            <span class="personName">Michael Hinterheller</span>
                            <span class="personTitle">Öffentlich bestellter und vereidigter Sachverständiger</span>
                    </h1>
                    <h3>Willkommen auf meinem Internetangebot</h3>
                </div>
            )
	}
}

#-------------------------------------------------------------------------------
#	GENERAL: Header contact standard
#-------------------------------------------------------------------------------
lib.general.header_standard = COA
lib.general.header_standard {
	10 = TEXT
	10 {
            wrap = <div id="headerMiddle">|</div>
            value (
                <div>
                    <span><strong>Michael Hinterheller</strong></span><br>
                    <p>
                            Sandbach-Eben 8 - 94474 Vilshofen<br>
                            Telefon: 08548 1225<br>
                            Telefax: 08548 1314
                    </p>
                </div>
            )
	}
}

#-------------------------------------------------------------------------------
#	GENERAL: Header contact startpage
#-------------------------------------------------------------------------------
lib.general.header_start = COA
lib.general.header_start {
	10 = COA
	10 {
            wrap = <div id="headerMiddle"><div>|</div></div>
            10 = TEXT
            10 {
                value(
                    <span><strong>Michael Hinterheller</strong></span><br>
                    <p>Von der Industrie- und Handelskammer Niederbayern in Passau öffentlich bestellter und vereidigter Sachverständiger für Schäden an Gebäuden</p>
                    <p>
                            Sandbach-Eben 8 - 94474 Vilshofen<br>
                            Telefon: 08548 1225<br>
                            Telefax: 08548 1314
                    </p>
                )
            }
            20 = COA
            20 {
                wrap = <p>|</p>
                10 = TEXT
                10 {	
                    wrap = |<br>
                    value = {$plugin.theme_configuration.general.mail.link}
                    typolink.ATagParams = class="mailLink"
                    typolink.parameter = {$plugin.theme_configuration.general.mail.link}
                }
                20 = TEXT
                20 {	
                    value = {$plugin.theme_configuration.general.url.link}
                    typolink.ATagParams = class="webLink"
                    typolink.parameter = {$plugin.theme_configuration.general.url.link}
                }
           }
            
	}
}


#-------------------------------------------------------------------------------
#	GENERAL: Logo under navigation
#-------------------------------------------------------------------------------
lib.general.logo = COA
lib.general.logo {
	10 = TEXT
	10 {
            data = LLL:EXT:theme_hinterheller/Resources/Private/Language/locallang.xml:logo-img
            wrap = <img id="leftLogo" src="|" alt="Navigation Logo" />
	}
}
