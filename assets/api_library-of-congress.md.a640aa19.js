import{_ as s,o as a,c as n,V as l}from"./chunks/framework.ff7f77a0.js";const A=JSON.parse('{"title":"Library of Congress","description":"","frontmatter":{},"headers":[],"relativePath":"api/library-of-congress.md","filePath":"api/library-of-congress.md"}'),o={name:"api/library-of-congress.md"},p=l(`<h1 id="library-of-congress" tabindex="-1">Library of Congress <a class="header-anchor" href="#library-of-congress" aria-label="Permalink to &quot;Library of Congress&quot;">​</a></h1><p>The class for fetching metadata and images from <a href="https://www.loc.gov/" target="_blank" rel="noreferrer">Library of Congress</a> with its <a href="https://www.loc.gov/apis/" target="_blank" rel="noreferrer">search API</a>.</p><p>The class inherits the <a href="https://oldvis.github.io/libquery/api/library-of-congress.html" target="_blank" rel="noreferrer">corresponding class in libquery</a>, and additionally supports validation and processing of the metadata.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Create a querier for Library of Congress:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> libquery </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> LibraryOfCongress</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">directory </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./output/library-of-congress</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">querier </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">LibraryOfCongress</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">metadata_path</span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">directory</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">/metadata/metadata.jsonl&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#82AAFF;">    </span><span style="color:#A6ACCD;font-style:italic;">img_dir</span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">directory</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">/imgs&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Query metadata:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">base_url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.loc.gov</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">queries </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">base_url</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">/photos/?fo=json&amp;fa=online-format:image&amp;q=chart&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">base_url</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">/photos/?fo=json&amp;fa=online-format:image&amp;q=diagram&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Note: querying 1 image&#39;s metadata takes ~6s</span></span>
<span class="line"><span style="color:#A6ACCD;">querier</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fetch_metadata</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">queries</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">queries</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Validate metadata:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">querier</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">validate_metadata</span><span style="color:#89DDFF;">()</span></span></code></pre></div><p>Query images:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">querier</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fetch_image</span><span style="color:#89DDFF;">()</span></span></code></pre></div><p>Process metadata:</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">querier</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">process_metadata</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">save_path</span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">directory</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">/processed/processed.json&quot;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="processed-metadata-schema" tabindex="-1">Processed Metadata Schema <a class="header-anchor" href="#processed-metadata-schema" aria-label="Permalink to &quot;Processed Metadata Schema&quot;">​</a></h2><p>Each processed metadata entry is stored as:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TimePoint</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">year</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">month</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">day</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MetadataEntry</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">uuid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/** Null when API returns no author attribute. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">authors</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">displayName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">publishDate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TimePoint</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TimePoint</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">viewUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">downloadUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">md5</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">phash</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">languages</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tags</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">abstract</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">source</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Library of Congress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/** The url where the metadata is collected. */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">accessDate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,17),e=[p];function t(r,c,y,C,i,F){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};