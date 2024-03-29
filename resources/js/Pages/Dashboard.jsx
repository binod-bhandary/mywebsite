import '../../css/dashboard.scss';

import React from 'react';
import loadable from '@loadable/component'
const Authenticated = loadable(() => import('@/Layouts/Authenticated'))
import {Head, Link} from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg py-6 px-4">

                        <Link
                            href={route('posts.index')}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Manage Posts
                        </Link>

                        <div className="pt-6 bg-white text-gray-800">You're logged in!</div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
