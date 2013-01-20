# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# **********************************************************
# Library for TypoScript about navigations.
# Content:
#	* Service navigation (top)
#	* Breadcrumb
#	* Sidebar
#	* Language switch
#	* Footer menu (left & right)
# **********************************************************

#-------------------------------------------------------------------------------
#	NAVIGATION: Service navigation small
#-------------------------------------------------------------------------------
lib.navigation.small = COA
lib.navigation.small {
	stdWrap.wrap = <ul class="hMenu">|</ul>

	10 = HMENU
	10 {
		special = list
		special.value = {$plugin.theme_configuration.navigation_small}

		1 = TMENU
		1 {
			noBlur = 1

			NO {
				wrapItemAndSub = <li>|</li>
				ATagTitle.field = subtitle // title
				stdWrap.htmlSpecialChars = 1
			}
		}
	}
}

#-------------------------------------------------------------------------------
#	NAVIGATION: Main
#-------------------------------------------------------------------------------
lib.navigation.main = COA
lib.navigation.main{
	stdWrap.wrap = <ul id="leftMenu">|</ul>

	10 = HMENU
	10 {
		entryLevel = 0

                1 = TMENU
		1 {
			noBlur = 1

			NO = 1
			NO {
					wrapItemAndSub = <li>|</li>
					ATagTitle.field = subtitle // title
					stdWrap.htmlSpecialChars = 1
			}

			ACT <.NO
			ACT.wrapItemAndSub = <li class="selected">|</li>
			ACT.ATagBeforeWrap = 1

			CUR <.ACT
			CUR.wrapItemAndSub = <li class="selected">|</li>
		}

	}
}
