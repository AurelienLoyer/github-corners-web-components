import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import GithubCorners from './components/GithubCorners';

const CustomElement = wrap(Vue, GithubCorners);
window.customElements.define('github-corners', CustomElement);