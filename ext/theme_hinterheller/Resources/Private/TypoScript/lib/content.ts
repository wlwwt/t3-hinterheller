# ******************************************************************************
#	(c) 2012 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************


# **********************************************************
# Rendering of all content columns
# **********************************************************

#-------------------------------------------------------------------------------
#	CONTENT: Main Content (colPos = 0)
#-------------------------------------------------------------------------------
lib.content.main = COA
lib.content.main {
	stdWrap.wrap = |
	stdWrap.innerWrap = <!–-TYPO3SEARCH_begin-–>|<!–-TYPO3SEARCH_end-–>
	10 < styles.content.get
}
lib.content.0 < lib.content.main