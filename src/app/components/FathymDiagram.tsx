import React from 'react';

export function FathymDiagram() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Main Container */}
        <div className="border-2 border-[#6D3AD0] rounded-lg p-8 bg-[#0f0f1a]">
          
          {/* Title */}
          <div className="mb-6">
            <h1 className="text-center text-[#80FFFF]">EverythingAsCode Schema</h1>
          </div>

          {/* Code Block */}
          <div className="bg-[#0a0a14] border border-[#6D3AD0] rounded-lg p-6 font-mono text-sm">
            
            <p className="text-[#C589FF] mb-4">const eac: EverythingAsCode = {'{'}</p>
            
            <div className="ml-4 space-y-4">
              
              {/* Identity Section */}
              <div>
                <p className="text-[#8B7AA8]">// Identity</p>
                <p className="text-[#A78BFA]">EnterpriseLookup: <span className="text-[#00D9D9]">"ent-abc-123"</span>,</p>
                <p className="text-[#A78BFA]">Details: {'{'}</p>
                <div className="ml-4">
                  <p className="text-[#9D6FDB]">Name: <span className="text-[#00D9D9]">"My Application"</span>,</p>
                  <p className="text-[#9D6FDB]">Description: <span className="text-[#00D9D9]">"What it does"</span></p>
                </div>
                <p className="text-[#A78BFA]">{'}'},</p>
              </div>

              {/* Organization Section */}
              <SectionHeader title="ORGANIZATION" />
              <div>
                <p className="text-[#A78BFA]">Projects: {'{'}</p>
                <div className="ml-4">
                  <p className="text-[#9D6FDB]">"proj-1": {'{'}</p>
                  <div className="ml-4">
                    <p className="text-[#8B7AA8]">Details: {'{'} Name: <span className="text-[#00D9D9]">"Project One"</span> {'}'},</p>
                    <p className="text-[#8B7AA8]">ApplicationResolvers: {'{'} <span className="text-[#00A8A8]">/* which apps belong here */</span> {'}'}</p>
                  </div>
                  <p className="text-[#9D6FDB]">{'}'}</p>
                </div>
                <p className="text-[#A78BFA]">{'}'},</p>
              </div>

              {/* Applications Section */}
              <SectionHeader title="APPLICATIONS" />
              <div>
                <p className="text-[#A78BFA]">Applications: {'{'}</p>
                <div className="ml-4">
                  <p className="text-[#9D6FDB]">"app-web": {'{'}</p>
                  <div className="ml-4">
                    <p className="text-[#8B7AA8]">Details: {'{'} Name: <span className="text-[#00D9D9]">"Web App"</span> {'}'},</p>
                    <p className="text-[#8B7AA8]">Processor: {'{'} <span className="text-[#00A8A8]">/* PreactAppProcessor */</span> {'}'},</p>
                    <p className="text-[#8B7AA8]">ModifierResolvers: {'{'} <span className="text-[#00A8A8]">/* middleware */</span> {'}'}</p>
                  </div>
                  <p className="text-[#9D6FDB]">{'},'},</p>
                  <p className="text-[#9D6FDB]">"app-api": {'{'}</p>
                  <div className="ml-4">
                    <p className="text-[#8B7AA8]">Details: {'{'} Name: <span className="text-[#00D9D9]">"API"</span> {'}'},</p>
                    <p className="text-[#8B7AA8]">Processor: {'{'} <span className="text-[#00A8A8]">/* APIProcessor */</span> {'}'}</p>
                  </div>
                  <p className="text-[#9D6FDB]">{'}'}</p>
                </div>
                <p className="text-[#A78BFA]">{'}'},</p>
              </div>

              {/* File Sources Section */}
              <SectionHeader title="FILE SOURCES" />
              <div>
                <p className="text-[#A78BFA]">DFSs: {'{'}</p>
                <div className="ml-4">
                  <p className="text-[#9D6FDB]">"dfs-local": {'{'} Type: <span className="text-[#00D9D9]">"Local"</span>, FileRoot: <span className="text-[#00D9D9]">"./src"</span> {'}'},</p>
                  <p className="text-[#9D6FDB]">"dfs-jsr":   {'{'} Type: <span className="text-[#00D9D9]">"JSR"</span>, Package: <span className="text-[#00D9D9]">"@scope/pkg"</span> {'}'},</p>
                  <p className="text-[#9D6FDB]">"dfs-azure": {'{'} Type: <span className="text-[#00D9D9]">"Azure"</span>, Container: <span className="text-[#00D9D9]">"assets"</span> {'}'}</p>
                </div>
                <p className="text-[#A78BFA]">{'}'},</p>
              </div>

              {/* AI Circuits Section */}
              <SectionHeader title="AI CIRCUITS" />
              <div>
                <p className="text-[#A78BFA]">Circuits: {'{'}</p>
                <div className="ml-4">
                  <p className="text-[#9D6FDB]">"circuit-support": {'{'}</p>
                  <div className="ml-4">
                    <p className="text-[#8B7AA8]">Details: {'{'} Name: <span className="text-[#00D9D9]">"Support Agent"</span> {'}'},</p>
                    <p className="text-[#8B7AA8]">Neurons: {'{'} <span className="text-[#00A8A8]">/* AI agent definitions */</span> {'}'},</p>
                    <p className="text-[#8B7AA8]">Edges: {'{'} <span className="text-[#00A8A8]">/* how neurons connect */</span> {'}'}</p>
                  </div>
                  <p className="text-[#9D6FDB]">{'}'}</p>
                </div>
                <p className="text-[#A78BFA]">{'}'},</p>
              </div>

              {/* Governance Section */}
              <SectionHeader title="GOVERNANCE" />
              <div className="text-[#8B7AA8] space-y-1">
                <p>// Built into every definition:</p>
                <p>// - RBAC (who can access)</p>
                <p>// - Quotas (resource limits)</p>
                <p>// - Audit (change tracking)</p>
                <p>// - Multi-tenant (isolation)</p>
              </div>

            </div>

            <p className="text-[#C589FF] mt-4">{'}'}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="my-3">
      <div className="border border-[#6D3AD0] rounded px-3 py-1 inline-block">
        <p className="text-[#C589FF] text-xs">{title}</p>
      </div>
    </div>
  );
}