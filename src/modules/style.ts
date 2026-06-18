import { css } from 'lit-element';
import { CSS_STYLE } from '../const';
/* eslint-env browser */
const style = document.createElement('style');

style.textContent = css`
	.maxZIndex {
		z-index: 6 !important;
	}
	.transparent {
		visibility: hidden !important;
	}
	.detailPlayAction {
		color: rgb(15 17 19);
		font-weight: bold;
		float: left;
		padding: 7px 10px;
		border-radius: 5px;
		cursor: pointer;
		position: relative;
		background: orange;
		border: none;
		margin-right: 10px;
	}
	.detailPlayAction.disabled {
		cursor: default;
		background-color: gray;
		color: white;
	}
	.detailPlayTrailerAction {
		color: rgb(15 17 19);
		font-weight: bold;
		float: left;
		padding: 7px 10px;
		border-radius: 5px;
		cursor: pointer;
		position: relative;
		background: orange;
		border: none;
		visibility: hidden;
	}
	.seasons {
		z-index: 5;
		position: absolute;
		top: ${CSS_STYLE.expandedHeight + 16}px;
		width: calc(100% - 22px);
		left: 0;
		padding: 16px;
		display: none;
	}
	.episodes {
		z-index: 5;
		position: absolute;
		top: ${CSS_STYLE.expandedHeight + 16}px;
		width: calc(100% - 22px);
		left: 0;
		padding: 16px;
		display: none;
	}
	.additionalElem {
		color: hsla(0, 0%, 100%, 0.45);
		position: relative;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.ratingDetail {
		background: #ffffff24;
		padding: 5px 10px;
		border-radius: 5px;
		white-space: nowrap;
		margin-bottom: 10px;
		float: left;
		margin-right: 10px;
	}
	.contentRatingDetail {
		background: #ffffff24;
		padding: 5px 10px;
		border-radius: 5px;
		margin-right: 10px;
		white-space: nowrap;
		float: left;
		margin-bottom: 10px;
	}
	.clear {
		clear: both;
	}
	.minutesDetail {
		background: #ffffff24;
		padding: 5px 10px;
		border-radius: 5px;
		margin-right: 10px;
		white-space: nowrap;
		float: left;
		margin-bottom: 10px;
	}
	.detail .metaInfo {
		display: block;
		float: left;
	}
	.detail h2 {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		position: relative;
		margin: 5px 0px 10px 0px;
		font-size: 16px;
	}
	.detail h1 {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		position: relative;
		padding: 5px 0px;
		margin: 16px 0 10px 0;
	}

	.detail::-webkit-scrollbar {
		display: none;
	}

	.detail {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.searchContainer {
		position: relative;
		z-index: 2;
		padding-right: 8px;
	}

	.searchContainer input {
		width: calc(100% - 26px);
		padding: 10px;
		margin-bottom: 10px;
	}

	.detail {
		visibility: hidden;
		max-height: ${CSS_STYLE.expandedHeight + 16}px;
		display: block;
		overflow: scroll;
		text-overflow: ellipsis;
	}
	.detailDesc {
		position: relative;
	}
	.lds-ring {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}
	.lds-ring div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 64px;
		height: 64px;
		margin: 8px;
		border: 8px solid orange;
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: orange transparent transparent transparent;
	}
	.lds-ring div:nth-child(1) {
		animation-delay: -0.45s;
	}
	.lds-ring div:nth-child(2) {
		animation-delay: -0.3s;
	}
	.lds-ring div:nth-child(3) {
		animation-delay: -0.15s;
	}
	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.trackContainer {
		width: 100%;
	}
	.trackContainer.odd:hover,
	.trackContainer.even:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
	.trackInteractiveArea {
		width: 14px;
		height: 14px;
	}
	.trackInteractiveArea button[name='playButton'] {
		width: 30px;
		height: 30px;
		top: inherit;
		left: inherit;
		margin-top: -7px;
		margin-left: -3px;
	}
	.trackContainer.odd:hover .trackIndexElem .trackIndex,
	.trackContainer.even:hover .trackIndexElem .trackIndex {
		display: none;
	}
	.trackContainer.odd:hover .trackIndexElem .trackInteractiveArea,
	.trackContainer.even:hover .trackIndexElem .trackInteractiveArea {
		display: block;
	}
	.trackContainer.odd .trackIndexElem .trackInteractiveArea,
	.trackContainer.even .trackIndexElem .trackInteractiveArea {
		display: none;
	}
	.trackContainer.odd {
		background-color: rgba(255, 255, 255, 0.08);
	}
	.trackContainer.even {
		background-color: rgba(255, 255, 255, 0.04);
	}
	.trackLengthElem {
		position: relative;
		padding: 15px 20px 15px 10px;
	}
	.trackIndexElem {
		position: relative;
		padding: 15px 20px 15px 10px;
	}

	.trackTitleElem {
		width: 100%;
	}
	.detail {
		position: absolute;
		left: 247px;
		width: calc(100% - 267px);
		z-index: 5;
		transition: 0.5s;
		color: rgba(255, 255, 255, 0);
	}
	.contentbg {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0);
		z-index: 0;
		transition: 0.5s;
		left: 0;
		top: 0;
		background-size: cover;
		display: none;
	}
	.stop-scrolling {
		height: 100%;
		overflow: hidden;
	}
	.contentArt {
		position: absolute;
		background-color: rgba(0, 0, 0, 0);
		z-index: 2;
		left: 0;
		top: 0;
		background-size: cover;
		display: none;
		-webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
		-moz-animation: fadein 0.5s; /* Firefox < 16 */
		-ms-animation: fadein 0.5s; /* Internet Explorer */
		-o-animation: fadein 0.5s; /* Opera < 12.1 */
		animation: fadein 0.5s;
	}
	.yearElem {
		color: hsla(0, 0%, 100%, 0.45);
		position: relative;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.viewProgress {
		background: #e5a00d;
		height: 3px;
		bottom: 0;
		position: absolute;
	}
	.toViewEpisode {
		position: relative;
		height: 28px;
		width: 28px;
		float: right;
		display: block;
		background: #e5a00d;
		font-weight: bold;
		color: black;
		transition: 0.5s;
		right: -14px;
		top: -14px;
		transform: rotate(45deg);
	}
	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Firefox < 16 */
	@-moz-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Safari, Chrome and Opera > 12.1 */
	@-webkit-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Internet Explorer */
	@-ms-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Opera < 12.1 */
	@-o-keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.toViewSeason {
		position: relative;
		top: 5px;
		right: 5px;
		float: right;
		display: block;
		border-radius: 5px;
		background: #e5a00d;
		font-weight: bold;
		color: black;
		padding: 1px 6px;
		transition: 0.5s;
	}
	.seasonTitleElem {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		position: relative;
		font-weight: bold;
		margin-top: 5px;
		transition: 0.5s;
		color: white;
	}
	.episodeTitleElem {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		position: relative;
		font-weight: bold;
		margin-top: 5px;
		transition: 0.5s;
		color: white;
	}
	.seasonEpisodesCount {
		transition: 0.5s;
		color: white;
	}
	.episodeNumber {
		color: white;
	}
	.titleElem {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		position: relative;
		min-width: 100% !important;
	}
	.seasonContainer {
		position: relative;
		float: left;
		margin-right: 10px;
		margin-bottom: 15px;
		transition: 0.5s;
	}
	.episodeContainer {
		position: relative;
		float: left;
		margin-right: 10px;
		margin-bottom: 15px;
		transition: 0.5s;
	}
	.metaInfoDetails {
		color: hsla(0, 0%, 98%, 0.45);
		text-transform: uppercase;
		margin-top: 10px;
	}
	.simulatedFullScreen {
		background: black;
		height: 100%;
	}
	.episodeElem {
		background-repeat: no-repeat;
		background-size: contain;
		border-radius: 5px;
		transition: 0.5s;
		background: black;
		overflow: hidden;
	}
	.seasonElem {
		background-repeat: no-repeat;
		background-size: contain;
		border-radius: 5px;
		transition: 0.5s;
	}
	.contentContainer {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.libraryRow {
		display: flex;
		flex-wrap: nowrap;
		overflow-x: auto;
		gap: 10px;
		padding-bottom: 4px;
	}
	.movieElem {
		margin-bottom: 5px;
		background-repeat: no-repeat;
		background-size: cover;
		overflow: hidden;
		border-radius: 5px;
		position: relative;
		z-index: 1;
	}
	.plexMeetsContainer {
		z-index: 1;
		float: left;
		margin-right: 10px;
	}
	.no-transparency {
		background-color: rgba(0, 0, 0, 1) !important;
	}
	.videobg1 {
		position: absolute;
		background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2));
		height: 50%;
		top: 0;
		width: 100%;
	}
	.videobg2 {
		position: absolute;
		background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1));
		height: 50%;
		top: 50%;
		width: 100%;
	}
	.video {
		position: absolute;
		z-index: 3;
		visibility: hidden;
	}
	.movieExtras {
		z-index: 5;
		position: absolute;
		top: 340px;
		width: calc(100% - 32px);
		left: 0;
		padding: 16px;
	}
	.interactiveArea {
		position: relative;
		width: 100%;
		height: 100%;
		transition: 0.5s;
	}
	.interactiveArea:hover {
		background: rgba(0, 0, 0, 0.3);
	}

	.movieElem .interactiveArea button[name='playButton'].touchDevice,
	.seasonElem .interactiveArea button[name='playButton'].touchDevice,
	button[name='playButton'].disabled {
		display: none !important;
	}
	.episodeElem .interactiveArea button[name='playButton'].touchDevice {
		display: block;
		outline: 0;
		background: orange !important;
		border: 2px solid orange !important;
		box-shadow: 0 0 0 3px orange !important;
	}
	button[name='playButton'] {
		width: 40px;
		height: 40px;
		border: 2px solid white;
		border-radius: 100%;
		cursor: pointer;
		transition: 0.2s;
		margin: 0 auto;
		left: calc(50% - 20px);
		display: block;
		top: calc(50% - 20px);
		position: absolute;
	}
	button[name='playButton']:hover {
		background: orange !important;
		border: 2px solid orange !important;
	}
	button[name='playButton']:focus {
		outline: 0;
		background: orange !important;
		border: 2px solid orange !important;
		box-shadow: 0 0 0 3px orange !important;
	}

	button[name='playButton']::after {
		content: '';
		display: inline-block;
		position: relative;
		top: 1px;
		left: 2px;
		border-style: solid;
		border-width: 6px 0 6px 12px;
		border-color: transparent transparent transparent white;
		transition: 0.2s;
	}

	.interactiveArea button[name='playButton'] {
		background: rgba(0, 0, 0, 0);
		border: 2px solid rgba(255, 255, 255, 0);
	}

	.interactiveArea:hover button[name='playButton'] {
		background: rgba(0, 0, 0, 0.4);
		border: 2px solid rgba(255, 255, 255, 1);
	}

	.interactiveArea button[name='playButton']:after {
		border-color: transparent transparent transparent rgba(255, 255, 255, 0);
	}

	.episodeElem > .interactiveArea > button[name='playButton'].touchDevice:after {
		border-color: transparent transparent transparent rgba(255, 255, 255, 1);
	}

	.interactiveArea:hover button[name='playButton']:after {
		border-color: transparent transparent transparent rgba(255, 255, 255, 1);
	}

	button[name='playButton']:hover:after {
		border-color: transparent transparent transparent black !important;
	}

	button[name='playButton']:focus:after {
		border-color: transparent transparent transparent black !important;
	}
	.plexModal {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.75);
		align-items: center;
		justify-content: center;
	}
	.plexModal.active {
		display: flex;
	}
	.plexModalPanel {
		position: relative;
		width: 92%;
		max-width: 860px;
		max-height: 88vh;
		background: #181818;
		border-radius: 12px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		box-shadow: 0 8px 40px rgba(0, 0, 0, 0.8);
	}
	.plexModalBackdrop {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 200px;
		background-size: cover;
		background-position: center top;
		opacity: 0.25;
		pointer-events: none;
	}
	.plexModalClose {
		position: absolute;
		top: 10px;
		right: 12px;
		z-index: 10;
		background: rgba(0, 0, 0, 0.6);
		border: none;
		color: white;
		font-size: 22px;
		line-height: 1;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	}
	.plexModalClose:hover {
		background: rgba(255, 255, 255, 0.2);
	}
	.plexModalTop {
		display: flex;
		flex-direction: row;
		gap: 20px;
		padding: 20px;
		position: relative;
		flex-shrink: 0;
	}
	.plexModalPoster {
		flex-shrink: 0;
		border-radius: 6px;
		overflow: hidden;
		background: #000;
	}
	.plexModalPoster img {
		display: block;
		width: 140px;
		height: 207px;
		object-fit: cover;
	}
	.plexModalPoster.square img {
		height: 140px;
	}
	.plexModalInfo {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	.plexModalTitle {
		font-size: 22px;
		font-weight: bold;
		color: white;
		margin: 0 0 6px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.plexModalYear {
		font-size: 13px;
		color: hsla(0, 0%, 100%, 0.55);
		margin-bottom: 8px;
	}
	.plexModalMeta {
		margin-bottom: 10px;
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.plexModalDesc {
		font-size: 13px;
		color: hsla(0, 0%, 100%, 0.75);
		line-height: 1.5;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin-bottom: 12px;
	}
	.plexModalActions {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}
	.plexModalDivider {
		height: 1px;
		background: rgba(255, 255, 255, 0.1);
		margin: 0 20px;
		flex-shrink: 0;
	}
	.plexModalSeasons {
		display: flex;
		flex-direction: row;
		gap: 8px;
		padding: 12px 20px;
		overflow-x: auto;
		flex-shrink: 0;
		scrollbar-width: thin;
		scrollbar-color: rgba(255,255,255,0.2) transparent;
	}
	.plexModalSeasons::-webkit-scrollbar {
		height: 4px;
	}
	.plexModalSeasons::-webkit-scrollbar-track {
		background: transparent;
	}
	.plexModalSeasons::-webkit-scrollbar-thumb {
		background: rgba(255,255,255,0.2);
		border-radius: 2px;
	}
	.plexModalSeasonTab {
		flex-shrink: 0;
		padding: 6px 14px;
		border-radius: 20px;
		border: 1px solid rgba(255,255,255,0.25);
		color: rgba(255,255,255,0.7);
		font-size: 13px;
		cursor: pointer;
		white-space: nowrap;
		transition: 0.2s;
		background: transparent;
	}
	.plexModalSeasonTab:hover {
		border-color: white;
		color: white;
	}
	.plexModalSeasonTab.active {
		background: orange;
		border-color: orange;
		color: black;
		font-weight: bold;
	}
	.plexModalEpisodesSection {
		flex: 1;
		overflow-y: auto;
		min-height: 0;
	}
	.plexModalEpisodesRow {
		display: flex;
		flex-direction: row;
		gap: 12px;
		padding: 0 20px 20px;
		overflow-x: auto;
		scrollbar-width: thin;
		scrollbar-color: rgba(255,255,255,0.2) transparent;
	}
	.plexModalEpisodesRow::-webkit-scrollbar {
		height: 4px;
	}
	.plexModalEpisodesRow::-webkit-scrollbar-track {
		background: transparent;
	}
	.plexModalEpisodesRow::-webkit-scrollbar-thumb {
		background: rgba(255,255,255,0.2);
		border-radius: 2px;
	}
	.plexModalEpisodeCard {
		flex-shrink: 0;
		width: 200px;
		cursor: pointer;
	}
	.plexModalEpisodeThumb {
		width: 200px;
		height: 113px;
		border-radius: 5px;
		overflow: hidden;
		background: #000;
		position: relative;
	}
	.plexModalEpisodeThumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.plexModalEpisodeThumb .interactiveArea {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.plexModalEpisodeTitle {
		font-size: 12px;
		color: white;
		margin-top: 5px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: bold;
	}
	.plexModalEpisodeNum {
		font-size: 11px;
		color: rgba(255,255,255,0.55);
		margin-top: 2px;
	}
	.plexModalSpinner {
		padding: 20px;
		display: flex;
		justify-content: center;
	}
`.cssText;

export default style;
