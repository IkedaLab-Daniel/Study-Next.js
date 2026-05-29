export default async function PostDetail({ params }) {
    const { id } = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    // console.log(JSON.stringify(data, null, 2))
    console.log(data)

    return (
        <main style={{ padding: "24px", maxWidth: "680px", margin: "0 auto" }}>
            <div
                style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "20px",
                    background: "#ffffff",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.06)",
                }}
            >
                <h1 style={{ margin: 0, fontSize: "28px", letterSpacing: "-0.01em" }}>
                    Post Detail
                </h1>
                <p style={{ margin: "8px 0 0", color: "#6b7280" }}>
                    Post #{data.id} by user {data.userId}
                </p>

                <h2 style={{ margin: "18px 0 8px", fontSize: "20px" }}>{data.title}</h2>
                <p style={{ margin: 0, lineHeight: 1.6 }}>&quot;{data.body}&quot;</p>
            </div>
        </main>
    )
}