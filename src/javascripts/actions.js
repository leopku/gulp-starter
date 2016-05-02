/*
* @Author: leopku
* @Date:   2016-05-02 13:11:39
* @Last Modified by:   leopku
* @Last Modified time: 2016-05-02 13:12:41
*/

'use strict';

export const incrementCounter = function ({dispatch, state}) {
	dispatch('INCREMENT', 1)
}
